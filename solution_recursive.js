const categories = [
    {
        name: 'category1',
        subcategories: [
            {
                name: 'category2',
                subcategories: []
            },
            {
                name: 'category3',
                subcategories: [
                    {
                        name: 'category4',
                        subcategories: []
                    }
                ]
            }
        ]
    },
    {
        name: 'category5',
        subcategories: []
    }
];

// TO-DO: Implement this function
let parentCategory = "";
let completedPath = false;
let result = "";
const getCategoryPath = (categories, categoryName) => {
    let path = "/";
    //let's find the target category at the parent level
    for(const category of categories){
        if(category.name === categoryName){
            completedPath = true;
            // generating the completed path
			path += parentCategory + categoryName;
            //reset parentCategory
            parentCategory = "";
        }
    }

    //if we don't find it
    //let's find it in the subcategories
    if(!completedPath){
        for(const category of categories){
            if(category.subcategories.length > 0){
                parentCategory += category.name + "/";
                //we call ourselves to repeat the logic
                result = getCategoryPath(category.subcategories, categoryName);
            }
        }
    }
    (result !="") ? path = result : result;
    result = ""
    completedPath = false;
    return path;
};


// OUTPUT SAMPLES
console.log(getCategoryPath(categories, 'category4')); // should output: '/category1/category3/category4'
console.log(getCategoryPath(categories, 'category2')); // should output: '/category1/category2'
console.log(getCategoryPath(categories, 'category5')); // should output: '/category5'