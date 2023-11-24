import {Component, OnInit} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-dialog-example',
    templateUrl: 'dialog-example.component.html',
    styleUrls: ['/dialog-example.component.scss'],
    animations: [
        trigger('enlargeTrigger', [
            state('inactive', style({
                padding: '8px', // or your initial padding value
                transform: 'translate(0)',
            })),
            state('active', style({
                padding: '10px', // or your enlarged padding value
                transform: 'translate(-5px, -5px)', // or your desired position
            })),
            transition('inactive <=> active', animate('200ms ease-in-out')),
        ]),
    ],
})

export class DialogExampleComponent implements OnInit {
    audio1: HTMLAudioElement;
    audio2: HTMLAudioElement;
    currentAudio: HTMLAudioElement;

    activeOption = 'birthday';
    options: { name: string; active: boolean, value: string }[] = [];

    imageUrls = [
        'assets/images/Property 1=Default.svg',
        'assets/images/Variant3.svg',
        'assets/images/Variant3-10.svg',
        'assets/images/Variant3-9.svg',
        'assets/images/Variant3-8.svg',
        'assets/images/Variant3-7.svg',
        'assets/images/Variant3-6.svg',
        'assets/images/Variant3-5.svg',
        'assets/images/Variant3-4.svg',
        'assets/images/Variant3-3.svg',
        'assets/images/Variant3-2.svg',
        'assets/images/Variant3-1.svg',
        'assets/images/Variant3-11.svg',
        'assets/images/Variant3-12.svg',
        'assets/images/Variant3-13.svg',
    ];
    currentImageIndex = 0;

    constructor() {
        this.audio1 = new Audio('/assets/audio/Evrika Censored V2.mp3');
        this.audio2 = new Audio('/assets/audio/Sulpak Censored.mp3');

        this.currentAudio = this.audio1; // Set the initial audio

        // Subscribe to the timeupdate event to update the animation state
        this.setupEventListener(this.audio1);  // Set up event listener for audio1 initially

        this.currentAudio = this.audio1;
    }

    private setupEventListener(audio: HTMLAudioElement) {
        audio.addEventListener('timeupdate', () => {
            this.updateAnimationState();
            if (!audio.paused) {
                this.updateImages();
            }
        });
    }

    ngOnInit() {
        // Initialize your options array here
        this.options = [
            { name: 'День рождения', active: true, value: 'birthday' },
            { name: 'Черная Пятница', active: false, value: 'status' },
        ];
    }

    updateAnimationState() {
        // Calculate the progress as a percentage
        const progress = (this.currentAudio.currentTime / this.currentAudio.duration) * 100;

        // Calculate the current image index based on the progress
        const newIndex = Math.floor((progress / 100) * this.imageUrls.length);

        // Update the current image index only if it has changed
        if (newIndex !== this.currentImageIndex) {
            this.currentImageIndex = newIndex;
        }
    }

    updateImages() {
        // Calculate the total progress as a percentage
        const totalProgress = (this.currentAudio.currentTime / this.currentAudio.duration) * 100;

        // Calculate the current image index based on the total progress
        this.currentImageIndex = Math.floor((totalProgress / 100) * this.imageUrls.length);

        console.log(this.currentImageIndex);
    }

    toggleState(clickedOption: { name: string, active: boolean, value: string }) {
        this.audio1.pause();
        this.audio2.pause();

        const sameOptionClicked = clickedOption.value === this.activeOption;


        if (clickedOption.value === 'birthday') {
            console.log('111')
            this.currentAudio = this.audio1;
        } else {
            console.log('222')
            this.currentAudio = this.audio2;
        }

        this.setupEventListener(this.currentAudio);

        // // Reset the progress always when switching between options
        this.currentImageIndex = 0;

        this.options.forEach(option => {
            if (option !== clickedOption) {
                option.active = false;
            }
        });

        if (clickedOption.active && sameOptionClicked) {
            return;
        } else {
            this.activeOption = clickedOption.value;
            clickedOption.active = !clickedOption.active;
        }
    }

    activateAudio(value: string) {
        // Pause the current audio if it is playing
        if (!this.currentAudio.paused) {
            this.currentAudio.pause();
        } else {
            // Otherwise, switch to the selected audio and play it
            if (value === 'birthday') {
                this.currentAudio = this.audio1;
            } else {
                this.currentAudio = this.audio2;
            }
            this.currentAudio.play();
        }
    }
}
