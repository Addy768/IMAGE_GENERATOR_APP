const generateForm = document.querySelector(".generate-form");

const handleFormSubmission = (e)=> {

    e.preventDefault();

    //getting inputs
    const userPrompt = e.srcElement[0].value;
    const userImgQuantity = e.srcElement[1].value;
    const imgCardMarkup = Array.from({length: userImgQuantity }, () =>


    )
}