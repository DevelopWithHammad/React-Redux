// Action Creators
// person who is submtting the form

const newBooking = (name, amount) => {
    return {
        type: "NEW_BOOKING",
        payload: {
            name,
            amount,
        },
    };
};


const cancelBooking = (name, refundAmount) => {
    return {
        type: "CANCEL_BOOKING",
        payload: {
            name,
            amount,
        },
    };
};



// Reducer
const reservartionHistory = (oldReservation = [], action) => {
    if (action.type === "NEW_BOOKING") {
        return [...oldReservation, action.payload]
    }
    else if (action.type === "CANCEL_BOOKING") {
        return oldReservation.filter((record) => {
            return record !== action.payload.name
        })
    }

    return oldReservationList
}


const cancellationHistory = (oldReservation = [], action) => {
    if (action.type === "NEW_BOOKING") {
        return [...oldReservation, action.payload]
    }
    else if (action.type === "CANCEL_BOOKING") {
        return oldReservation.filter((record) => {
            return record !== action.payload.name
        })
    }

    return oldReservationList
}
