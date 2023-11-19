import { Carousel } from '@mantine/carousel';

export default function TrippyCarousel() {
    return (
        <Carousel slideSize="70%" height={"60vh"} slideGap="md" loop withIndicators>
            <Carousel.Slide>
                <div className="bg-cyan-100 h-5/6">
                    <h1 className="text-center text-4xl">Trippy</h1>
                    <img src="" alt=""/>
                </div>
            </Carousel.Slide>
            <Carousel.Slide>
                <h1>Skye News Frontend</h1>
            </Carousel.Slide>
            <Carousel.Slide>
                <h1>Skye News Backend</h1>
            </Carousel.Slide>
        </Carousel>
    );
}