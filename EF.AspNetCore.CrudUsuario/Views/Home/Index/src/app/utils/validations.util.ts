export class Validator {

    static IsValidEmail(email: string): boolean {
        const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (email && (email.length <= 5 || !EMAIL_REGEXP.test(email))) {
            return false;
        }
        
        return true;
    }
}
