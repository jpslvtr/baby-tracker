import { features } from './config';

// The formula brand is also written as the first line of a bottle's notes, so
// it shows in the timeline. "Other" has no prefix line.

const OTHER = 'Other';
const brands = features.formula.brands;
const allBrands = [...brands, ...features.formula.pastBrands];

export const defaultBrand = brands[0] ?? OTHER;

export function isBrandLine(line: string): boolean {
    return allBrands.includes(line);
}

interface BrandFields {
    select: HTMLSelectElement;
    notes: HTMLTextAreaElement;
    indicator: HTMLDivElement;
    typeText: HTMLSpanElement;
    // Whether the brand applies right now (a breast milk bottle has no brand).
    active: () => boolean;
}

function addOption(select: HTMLSelectElement, value: string, label: string, before: Element | null = null): HTMLOptionElement {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    select.insertBefore(option, before);
    return option;
}

export function populateBrandSelect(select: HTMLSelectElement, includePlaceholder: boolean): void {
    select.replaceChildren();
    if (includePlaceholder) addOption(select, '', 'Select type...');
    brands.forEach(b => addOption(select, b, b));
    addOption(select, OTHER, OTHER);
}

// Past brands are no longer offered, but entries saved with one must stay
// editable without their type changing. The option is added/removed rather
// than hidden because iOS Safari ignores hidden/display:none on <option>.
export function setPastBrandOption(select: HTMLSelectElement, brand: string): void {
    select.querySelectorAll('option[data-past-brand]').forEach(o => o.remove());
    if (features.formula.pastBrands.includes(brand) && !brands.includes(brand)) {
        addOption(select, brand, brand, select.querySelector(`option[value="${OTHER}"]`)).dataset.pastBrand = '';
    }
}

// Detects the brand of an existing bottle: the saved field, or for older
// entries the first line of the notes.
export function detectBrand(data: { formulaType?: string | null; notes?: string }): string {
    if (data.formulaType) return data.formulaType;
    const firstLine = (data.notes || '').split('\n')[0];
    return isBrandLine(firstLine) ? firstLine : '';
}

export function stripBrandLine(notes: HTMLTextAreaElement): void {
    const lines = notes.value.split('\n');
    if (lines.length > 0 && isBrandLine(lines[0])) {
        lines.splice(0, 1);
        notes.value = lines.join('\n');
    }
}

function applyBrand(fields: BrandFields): void {
    const { select, notes, indicator, typeText } = fields;
    const selectedType = select.value;
    const currentNotes = notes.value;
    const lines = currentNotes.split('\n');
    const firstLineIsType = lines.length > 0 && isBrandLine(lines[0]);

    if (selectedType === OTHER) {
        if (firstLineIsType) {
            lines.splice(0, 1);
            notes.value = lines.join('\n');
        }
        typeText.textContent = OTHER;
        indicator.style.display = 'block';
    } else if (selectedType) {
        if (firstLineIsType) {
            lines[0] = selectedType;
            notes.value = lines.join('\n');
        } else if (currentNotes.trim()) {
            notes.value = `${selectedType}\n${currentNotes}`;
        } else {
            notes.value = selectedType + '\n';
        }
        typeText.textContent = selectedType;
        indicator.style.display = 'block';
    } else {
        indicator.style.display = 'none';
    }
}

// Keeps the brand line at the top of the notes: it can't be deleted or typed
// into, and typing at the start moves to the next line.
function protectBrandLine(fields: BrandFields): void {
    const { select, notes } = fields;
    const lockedType = (): string | null => {
        const type = select.value;
        return fields.active() && type && type !== OTHER ? type : null;
    };

    notes.addEventListener('input', () => {
        const selectedType = lockedType();
        if (!selectedType) return;

        const currentValue = notes.value;
        const lines = currentValue.split('\n');

        if (lines.length === 0 || (lines[0] !== selectedType && lines[0] !== '')) {
            if (lines.length === 0) {
                notes.value = selectedType + '\n';
            } else if (lines[0] !== selectedType) {
                lines[0] = selectedType;
                notes.value = lines.join('\n');
            }
        }

        if (currentValue === selectedType) {
            notes.value = selectedType + '\n';
        }
    });

    notes.addEventListener('keydown', (e: KeyboardEvent) => {
        const selectedType = lockedType();
        if (!selectedType) return;

        const cursorPos = notes.selectionStart;
        const firstLineLength = selectedType.length;

        if (cursorPos <= firstLineLength) {
            if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key)) {
                return;
            }

            if (e.key === 'a' && (e.ctrlKey || e.metaKey)) {
                return;
            }

            if (e.key === 'Backspace' || e.key === 'Delete') {
                e.preventDefault();
                return;
            }

            if (e.key.length === 1 || e.key === 'Enter') {
                e.preventDefault();
                const before = notes.value.substring(0, firstLineLength + 1);
                const after = notes.value.substring(firstLineLength + 1);
                notes.value = before + (e.key === 'Enter' ? '\n' : e.key) + after;
                notes.selectionStart = firstLineLength + 2;
                notes.selectionEnd = firstLineLength + 2;
            }
        }
    });

    notes.addEventListener('paste', (e: ClipboardEvent) => {
        const selectedType = lockedType();
        if (!selectedType) return;
        if (notes.selectionStart <= selectedType.length) {
            e.preventDefault();
        }
    });
}

export function attachBrandFields(ids: { select: string; notes: string; indicator: string; typeText: string; container: string }): void {
    const container = document.getElementById(ids.container) as HTMLElement;
    const fields: BrandFields = {
        select: document.getElementById(ids.select) as HTMLSelectElement,
        notes: document.getElementById(ids.notes) as HTMLTextAreaElement,
        indicator: document.getElementById(ids.indicator) as HTMLDivElement,
        typeText: document.getElementById(ids.typeText) as HTMLSpanElement,
        active: () => container.style.display !== 'none'
    };
    fields.select.addEventListener('change', () => applyBrand(fields));
    protectBrandLine(fields);
}
