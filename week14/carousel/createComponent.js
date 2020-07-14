export function create(Cls, attributes, ...children) {
    console.log(children, 'args');
    let o;
    if (typeof Cls === 'string') {
        o = new Wraper(Cls)
    } else {
        o = new Cls({
            timer: {}
        })
    }
    for (const name in attributes) {
        o.setAttribute(name, attributes[name])
    }
    let visit = (children) => {
        for (const child of children) {
            if (typeof child === 'object' && child instanceof Array) {
                visit(child);
                continue;
            }
            if (typeof child === 'string') {
                child = new Text(child)
            }
            o.appendChild(child)
        }
    }

    visit(children)


    return o
}
export class Text {
    constructor(text) {
        this.children = [];
        this.root = document.createTextNode(text)
    }
    mountTo(parent) {
        parent.appendChild(this.root)
    }
}  
export class Wraper {
    constructor(type) {
        this.children = [];
        this.root = document.createElement(type)
    }
    setAttribute(name, value) {//attr
        console.log(name, value);
        this.root.setAttribute(name, value)

    };
    addEventListener() {
        this.root.addEventListener(...arguments)
    }

    get style() {
        return this.root.style
    }
    mountTo(parent) {
        parent.appendChild(this.root)
        for (const child of this.children) {
            child.mountTo(this.root)
        }
    }
    appendChild(child) {
        this.children.push(child)
    }
};