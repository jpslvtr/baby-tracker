export function convertToOz(amount: number, unit: string | undefined): number {
    if (unit === 'ml') {
        return amount * 0.033814;
    }
    return amount;
}

export function convertToMl(amount: number, unit: string | undefined): number {
    if (unit === 'oz') {
        return amount * 29.5735;
    }
    return amount;
}

export function formatBothUnits(amount: number, unit: string | undefined): string {
    const oz = convertToOz(amount, unit);
    const ml = convertToMl(amount, unit);
    return `${oz.toFixed(1)} oz / ${ml.toFixed(0)} ml`;
}

// Amount inputs paired with the unit select that converts them.
const AMOUNT_FIELDS: [amountId: string, unitId: string][] = [
    ['bottle-amount', 'bottle-unit'],
    ['pump-amount', 'pump-unit'],
    ['edit-bottle-amount', 'edit-bottle-unit'],
    ['edit-pump-amount', 'edit-pump-unit']
];

export function enforceNumericInputs(): void {
    AMOUNT_FIELDS.forEach(([amountId]) => {
        const input = document.getElementById(amountId) as HTMLInputElement | null;
        if (!input) return;

        input.addEventListener('keypress', (e: KeyboardEvent) => {
            const char = e.key;
            const currentValue = input.value;

            if (e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Tab' || e.key === 'Escape' || e.key === 'Enter') {
                return;
            }

            if (e.ctrlKey || e.metaKey) {
                return;
            }

            if (char >= '0' && char <= '9') {
                return;
            }

            if (char === '.' && currentValue.indexOf('.') === -1) {
                return;
            }

            e.preventDefault();
        });

        input.addEventListener('paste', (e: ClipboardEvent) => {
            e.preventDefault();
            const pastedText = e.clipboardData?.getData('text') || '';
            const numericText = pastedText.replace(/[^0-9.]/g, '');

            const parts = numericText.split('.');
            const cleanText = parts.length > 2 ? parts[0] + '.' + parts.slice(1).join('') : numericText;

            document.execCommand('insertText', false, cleanText);
        });
    });
}

export function setupUnitConversion(): void {
    AMOUNT_FIELDS.forEach(([amountId, unitId]) => {
        const amount = document.getElementById(amountId) as HTMLInputElement | null;
        const unit = document.getElementById(unitId) as HTMLSelectElement | null;
        if (amount && unit) {
            unit.addEventListener('change', () => convertAmountInInput(amount, unit.value));
        }
    });
}

function convertAmountInInput(amountInput: HTMLInputElement, newUnit: string): void {
    const previousUnit = amountInput.dataset.lastUnit || 'oz';
    const currentValue = parseFloat(amountInput.value);
    if (isNaN(currentValue) || currentValue <= 0) {
        // Still record the unit, or a value typed afterwards would later be
        // converted from the wrong unit.
        amountInput.dataset.lastUnit = newUnit;
        return;
    }

    if (previousUnit === newUnit) {
        return;
    }

    let convertedValue: number;
    if (newUnit === 'ml' && previousUnit === 'oz') {
        convertedValue = currentValue * 29.5735;
    } else if (newUnit === 'oz' && previousUnit === 'ml') {
        convertedValue = currentValue * 0.033814;
    } else {
        return;
    }

    amountInput.value = convertedValue.toFixed(2);
    amountInput.dataset.lastUnit = newUnit;
}
