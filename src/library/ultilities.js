export const handleValidate = (key, value) => {
    switch (key) {
        case 'first_name': {
            if (/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{8,}$/.test(value))
                return null;
            return "First name must contain at least 1 uppercase or lowercase and only word. Length is greater than 8.";
        }
        case 'last_name': {
            if (/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{8,}$/.test(value))
                return null;
            return "Last name must contain at least 1 uppercase or lowercase and only word. Length is greater than 8.";
        }
        case 'email': {
            if (/@gmail\.com\.vn$/.test(value))
                return null;
            return "Invalid email."
        }
        case 'phone_number': {
            if (/^0[35789][0-9]{8}$/.test(value))
                return null;
            return "Invalid VietNamese phone number.";
        }
    }
}