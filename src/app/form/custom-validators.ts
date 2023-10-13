import {AbstractControl, FormArray, ValidatorFn} from '@angular/forms';

export const atLeastOne = (): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const controlArr = control.get('checkboxes') as FormArray;
    const checkboxSelected = controlArr?.controls.some(c => {
      return c.value === true;
    });

    const otherControl = control.get('other');

    return checkboxSelected || (otherControl && otherControl.value.length) ? null : {'atLeastOneError': true}
  };
}
