function dynamicIndent() {
    const containers = document.querySelectorAll('.js-dynamicIndent-container');

    for (const container of containers) {
        const headings1 = container.querySelectorAll('h1');
        const headings2 = container.querySelectorAll('h2');

        checkWord1(headings1);
        checkWord1(headings2);
    }
}

// Helper function for checking the first word of of each element in the provided nodeList
function checkWord1(nodeList) {
    if (nodeList) {
        for (const element of nodeList) {
            // Breaking the sentence into an array of words
            const words = element.innerHTML.split(' ');
            // Checking if the first word is a number
            const word1NumCheck = !isNaN(parseFloat(words[0]));

            if (word1NumCheck) {
                // Looping through all the words
                const formated = words.map((word, index) => {
                    // Wrapping the first word into <output> html tag
                    // output will need to have width and display: inline-block set in CSS
                    if (index === 0) {
                        return `<output>${word}</output>`;
                    } else {
                        return word;
                    }
                }).join(' ');

                // Injecting the formated sentence back to it's container
                element.innerHTML = formated;
            }
        }
    }
}
