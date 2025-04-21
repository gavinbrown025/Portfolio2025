import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

export default {
    name: "TheShowcase",

    props:['project','projectIndex'],

    template: `
        <section class="showcase-con">

            <div class="showcase-header">
                <img @click="nextProject(-1)" src="images/doublearrow.svg" alt="" class="arrow prev">
                <h2>
                    <span v-for="(word, index) in project.nameSplit" class="name-split">{{word}} </span>
                </h2>
                <img @click="nextProject(1)" src="images/doublearrow.svg" alt="" class="arrow next">
            </div>

            <div class="bgSquare"></div>

            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div v-if="project.images" v-for="(image,index) in project.images" class="swiper-slide">
                        <img :src="'images/'+image" :alt="'project image'+(index+1)">
                    </div>
                    <div v-if="project.video" v-for="(video, index) in project.video" class="swiper-slide">
                        <video :src="'videos/'+video" :alt="'project video'+(index+1)" controls></video>
                    </div>
                </div>
                <div v-if='hasMultipleContent()' class="swiper-label">
                    <img class="swiper-button-prev" src="images/smArrow.svg" alt="">
                    <span>swipe</span>
                    <img class="swiper-button-next" src="images/smArrow.svg" alt="">
                </div>
            </div>

            <div class="showcase-desc-bg">
                <div class="scroll-label">
                    <img src="images/smArrow.svg" alt="">
                    <span>scroll</span>
                </div>
            </div>
            <div class="showcase-desc">
                <div class="showcase-desc-header">
                    <img v-if="project.logo" :src="'images/'+ project.logo" alt="">
                    <div>
                        <a class="button" v-if="project.hosted" :href="project.hosted">Visit Site</a>
                        <a class="button" v-if="project.github" :href="project.github">GITHUB</a>
                    </div>
                </div>
                <p v-for="overview in project.overview">{{overview}}</p>
            </div>

        </section>
    `,
    created() {
        setTimeout(() => {
            new Swiper('.swiper-container', {
                centeredSlides: true,
                loop:false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })
        }, 500);
    },
    methods: {
        nextProject(direction){
            this.$emit('showNextProject', direction);
        },
        hasMultipleContent(){
            let videos = this.project.video ? this.project.video.length : 0
            return this.project.images.length + videos > 1
        }
    }
}

//*.add( function(){ console.log('Woohoo!') } )
