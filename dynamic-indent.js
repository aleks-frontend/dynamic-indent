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
            const words = element.innerHTML.split(' ');
            const word1NumCheck = !isNaN(parseFloat(words[0]));

            if (word1NumCheck) {
                const formated = words.map((word, index) => {
                    if (index === 0) {
                        return `<output>${word}</output>`;
                    } else {
                        return word;
                    }
                }).join(' ');

                element.innerHTML = formated;
            }
        }
    }
}
