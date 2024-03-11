import { INews } from "../@types/news";

export const initialContext: INews[] =
    [
        {
            id: 1,
            title: 'Reviving Retro PCs',
            description: 'What happens when old PCs are given modern upgrades?',
            home: false,
            top3: true,
            latest: false,
            url:'/posts/reviving-retro-pcs/34645',
            ariaLabel: '',
            images: {
                desktop: new URL('@/assets/images/image-retro-pcs.jpg', import.meta.url).href,
                mobile: undefined,
                alt: 'Retro PCs image'
            },
        },
        {
            id: 2,
            title: 'Top 10 Laptops of 2022',
            description: 'Our best picks for various needs and budgets.',
            home: false,
            top3: true,
            latest: false,
            url:'/posts/top-10-laptos-2022/234232',
            ariaLabel: '',
            images: {
                desktop: new URL('@/assets/images/image-top-laptops.jpg', import.meta.url).href,
                mobile: undefined,
                alt: 'Futuristic laptop'
            },
        },
        {
            id: 3,
            title: 'The Grownth of Gaming',
            description: 'How the pandemic has sparked fresh opportunities.',
            home: false,
            top3: true,
            latest: false,
            url:'/posts/grow-gaming/32424',
            ariaLabel: '',
            images: {
                desktop: new URL('@/assets/images/image-gaming-growth.jpg', import.meta.url).href,
                mobile: undefined,
                alt: 'Gamming PC'
            },
        },
        {
            id: 4,
            title: 'The Bright Future of Web 3.0?',
            description: 'We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?',
            home: true,
            top3: false,
            latest: false,
            url:'/post/bright-future-web-3',
            ariaLabel: 'Read more about The Bright Future of Web 3.0?',
            images: {
                desktop: new URL('@/assets/images/image-web-3-desktop.jpg', import.meta.url).href,
                mobile: new URL('@/assets/images/image-web-3-mobile.jpg', import.meta.url).href,
                alt: 'multiple blocks togetter'
            },
        },
        {
            id: 5,
            title: 'Hydrogen VS Electric Cars',
            description: 'Will hidrogen-fueled cars ever catch up EV\'s?',
            home: false,
            top3: false,
            latest: true,
            images: null,
            url:'/post/hydrogen-cs-electric/123232',
            ariaLabel: '',
        },
        {
            id: 6,
            title: 'The Downsides of AI Artistry',
            description: 'What are the possible adverse effects of the on-demand AI image generation?',
            home: false,
            top3: false,
            latest: true,
            images: null,
            url:'/post/downsides-of-ia/325332',
            ariaLabel: '',
        },
        {
            id: 7,
            title: 'Is VC Funding Drying Up?',
            description: ' Private funding by VC firms is down 50% YOY. We take a look at that means.',
            home: false,
            top3: false,
            latest: true,
            images: null,
            url:'/post/is-vc-drying-up/45343',
            ariaLabel: '',
        }

    ];