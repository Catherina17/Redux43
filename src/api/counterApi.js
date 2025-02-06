export const fetchCount = (amount = 1) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ data: amount }), 500)
    })
}

export const fetchCountDecrement = (amount) => {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500)
    )
}