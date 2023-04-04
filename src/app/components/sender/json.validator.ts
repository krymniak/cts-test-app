import { AbstractControl, ValidatorFn } from '@angular/forms';

export function jsonArrayValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (!value) {
      return { emptyValue: true };
    }
    try {
      const jsonArray = JSON.parse(value);
      if (!Array.isArray(jsonArray)) {
        return { invalidJsonArray: true };
      }
      for (const obj of jsonArray) {
        if (!obj.name || !obj.phone || !obj.email || !obj.gender) {
          return { invalidJsonObject: true };
        }
      }
      return null;
    } catch (error) {
      return { invalidJson: true };
    }
  };
}