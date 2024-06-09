export const login = async (name, email, password) => {
    try {
        const response = await fetch("http://localhost:5000/auth/login", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: name, email: email, password: password }),
        });

        const data = await response.json();
        if (data.error) {
            throw new Error('Login Error');
        }
        return data;
    } catch (error) {
        return error.message;
    }
}

export const sigin = async (name, email, password, phone, address, country) => {
    try {
        const response = await fetch("http://localhost:5000/auth/sigin", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: name, email: email, password: password, phone: phone, address: address, country: country }),
        });

        const data = await response.json();

        if (data.error) {
            throw new Error('Sigin Error');
        }

        return data;
    } catch (error) {
        return error.message;
    }
}

