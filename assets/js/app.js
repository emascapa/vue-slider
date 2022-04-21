const app = new Vue(
    {
        el: '#app',
        data: {
            places: [
                {
                    image: './assets/img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: './assets/img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: './assets/img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: './assets/img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: './assets/img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],
            img_counter: 0,
            
            active_img: 'border border-4 border-info',

            timer: null,
        },
        mounted: function() {
            this.startSlider();
        },

        methods: {
            buttonUp() {
                console.log('ciaoooo');
                if (this.img_counter === 0) {
                    this.img_counter = this.places.length - 1
                } else {
                    this.img_counter--
                }
            },
            buttonDown() {
                console.log('arrivederciiii');
                if (this.img_counter === this.places.length - 1) {
                    this.img_counter = 0
                } else {
                    this.img_counter++
                }
            },

            startSlider: function() {
                this.timer = setInterval(this.buttonDown, 4000);

                console.log('TIMER INIZIATO');
            },

            stopSlider: function() {
                clearInterval(this.timer);

                this.timer = null; 

                console.log('TIMER STOPPATO');
            },

            imgClick() {
                console.log('HELLOOOOOO');
            }
        }
    }
)