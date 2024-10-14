function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)//domElement is the createdElement with type a, which is the a html tag
    domElement.innerHTML = reactElement.children//innerHTML in a tag is the key:value pair of reactElement
//    a.innerhtml
   for (const prop in reactElement.props){
    if (prop ==='children') continue;
    domElement.setAttribute(prop, reactElement.props[prop])
   }
    container.appendChild(domElement)//due to this line the values of the above 3 line will be added(append) to the container attribute , so the main function can get values like customRender('href', reactElement.props.href = which will be  href: 'https://google.com')
    //so add that value to  [the meaning of line 9,container.appendChild(a [html tag])]


}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'

    // here react understands the inner functioning features and whats the use of that tag , like in a tag we have href and target for , it to open in new page or to 
}

const mainContainer = document.querySelector('#root')// this line is connected to the html page with the help of id root
// mainContainer is the connection for the html page

customRender(reactElement, mainContainer)

customRender(reactElement)















