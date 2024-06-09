export const addToTheCart = async (id, name, image, description, price, authToken) => {
    try {
        const response = await fetch('http://localhost:5000/cart/addItemsToCart', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token": authToken,
            },
            body: JSON.stringify({ id: id, name: name, img: image, desc: description, price: price }),
        });

        const data = await response.json();
        if (data.error) {
            throw new Error('Login Error');
        }
        return data;
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
}

export const fetchAllItems = async (authToken) => {
    try {
        const response = await fetch('http://localhost:5000/cart/getAllProducts', {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token": authToken,
            },
        });

        const data = await response.json();

        if (data.error) {
            throw new Error('Login Error');
        }

        return data;
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
}

export const removeFromCart = async (id, authToken) => {
    try {
        const response = await fetch(`http://localhost:5000/cart/removeAItem/${id}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token": authToken,
            },
        });

        const data = await response.json();

        if (data.error) {
            throw new Error('Login Error');
        }

        return data;
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
}