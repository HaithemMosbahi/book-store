import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

/**
 * Utility class contains validators for inputs
 * 
 * @export
 * @class AppValidators
 */
export class AppValidators {

    /**
     * Check wetheter the zipcode is valid or not
     * 
     * @static
     * @param {AbstractControl} control 
     * @returns {(ValidationErrors | null)} 
     * @memberof AppValidators
     */
    static zidCode(control: AbstractControl): ValidationErrors | null {
        const pattern = /^[0-9]{4}$/;
        if (control.value && !pattern.test(control.value)) {
            return { zipCode: true };
        }
        return null;
    }

    /**
     * Check wether the email is valid or not
     * 
     * @static
     * @param {string} [requiredDomain] 
     * @returns {ValidatorFn} 
     * @memberof AppValidators
     */
    static email(requiredDomain?: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (control.value) {
                if (!pattern.test(control.value)) {
                    return { email: true };

                }
                if (requiredDomain) {
                    const [left,actualDomain]= control.value.split('@');
                    if(actualDomain !== requiredDomain){
                       return { domain:{requiredDomain,actualDomain }};
                    }
                }
            }
            return null;
        }
    }
}