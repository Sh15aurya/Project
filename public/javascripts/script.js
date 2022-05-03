$(document).ready( () => {
    $('form').submit( function(event){
        event.preventDefault();
        const inputs = event.target.elements

        $.ajax({
            method: "POST",
            url: "/cart",
            data: {
                quantity: inputs.quantity.value,
                productImage: inputs.productImage.value,
                productName: inputs.productName.value,
                price: inputs.price.value
            }
        })
            .done( () => {
                alert("Product added to cart")
            })
            .fail( () => {
                alert("Something went wrong")
            })


        debugger
    })
})
