const {publishingCompanyGalho, publishingCompanyFolha} = require("./bookstore");

function mergeList(listOne, listTwo){
    let FinalList = [];
    let currentListOne = 0; //index list 1
    let currentListTwo = 0; //index list 2
    let currentFinalList = 0; //index final list 2

    while(currentListOne < listOne.length && currentListTwo < listTwo.length){
        let currentProductListOne = listOne[currentListOne];
        let currentProductListTwo = listTwo[currentListTwo];

        if(currentProductListOne.price < currentProductListTwo.price){
            FinalList[currentFinalList] = currentProductListOne;
            currentListOne++;
        }
        else{
            FinalList[currentFinalList] = currentProductListTwo;
            currentListTwo++;
        }

        currentFinalList++;
    }

    while(currentListOne < listOne.length){  
        FinalList[currentFinalList] = listOne[currentListOne];
        currentListOne++;
        currentFinalList++;
    }

    while(currentListTwo < listTwo.length){
        FinalList[currentFinalList] = listTwo[currentListTwo];
        currentListTwo++;
        currentFinalList++;
    }

    return FinalList;
}

console.log(mergeList(publishingCompanyGalho, publishingCompanyFolha));