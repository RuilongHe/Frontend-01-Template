import {create,Text,Wraper} from './createComponent.js'
class Carousel {
    constructor(config) {
        this.children = [];
    }
   
    render() {
        let chidren = this.data.map(url => {
            let element = <img src={url} alt="" />
            element.addEventListener('dragstart', event => { event.preventDefault() });
            return element;
        })
        let root = <div class='carousel'>
            {
                chidren
            }
        </div>;


        let position = 0;
        let nexPic = () => {
            let nextPosition = (position + 1) % this.data.length;
            let current = chidren[position];
            let next = chidren[nextPosition];

            current.style.transition = "ease 0s";
            next.style.transition = "ease 0s";

            current.style.transform = `translateX(${- 100 * position}%)`;
            next.style.transform = `translateX(${100 - 100 * nextPosition}%)`;
            setTimeout(() => {
                current.style.transition = "ease 0.5s";
                next.style.transition = "ease 0.5s";
                current.style.transform = `translateX(${-100 - 100 * position}%)`;
                next.style.transform = `translateX(${-100 * nextPosition}%)`;
                position = nextPosition;
            }, 16);


            setTimeout(nexPic, 3000);
        }
        setTimeout(nexPic, 3000);

        root.addEventListener('mousedown', event => {
            let startX = event.clientX, startY = event.clientY;

            let nextPosition = (position + 1) % this.data.length;
            let lastPosition = (position + this.data.length - 1) % this.data.length;

            let current = chidren[position];
            let last = chidren[lastPosition];
            let next = chidren[nextPosition];

            current.style.transition = 'ease 0s';
            last.style.transition = 'ease 0s';
            next.style.transition = 'ease 0s';

            current.style.transform = `translateX(${- 500 * position}px)`;
            last.style.transform = `translateX(${-500 - 500 * lastPosition}px)`;
            next.style.transform = `translateX(${500 - 500 * nextPosition}px)`;

            let move = event => {
                current.style.transform = `translateX(${event.clientX - startX - 500 * position}px)`;
                last.style.transform = `translateX(${event.clientX - startX - 500 - 500 * lastPosition}px)`;
                next.style.transform = `translateX(${event.clientX - startX + 500 - 500 * nextPosition}px)`;

            };
            let up = event => {
                let offset = 0;
                if (event.clientX - startX > 250) {
                    offset = 1;
                } else if (event.clientX - startX < -250) {
                    offset = -1;
                }
                current.style.transition = "ease 0.5s";
                last.style.transition = "ease 0.5s";
                next.style.transition = "ease 0.5s";

                current.style.transform = `translateX(${offset * 500 - 500 * position}px)`;
                last.style.transform = `translateX(${offset * 500 - 500 - 500 * lastPosition}px)`;
                next.style.transform = `translateX(${offset * 500 + 500 - 500 * nextPosition}px)`;

                position = (position + this.data.length - offset) % this.data.length;
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', up);
            }
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', up);
        });

        return root;
    }
    appendChild(child) {
        this.children.push(child);
    }
    setAttribute(name, value) {
        this[name] = value;

    };

    mounted(parent) {
        this.render().mounted(parent);
    }

};

let component = <Carousel data={[
    "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
    "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
    "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
    "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
]}>
</Carousel>;
component.mounted(document.body);