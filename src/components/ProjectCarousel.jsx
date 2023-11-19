import { Carousel } from '@mantine/carousel';
import MiniNav from "./MiniNav.jsx";
import { ScrollArea } from '@mantine/core';

export default function TrippyCarousel() {
    return (
        <div>
            <MiniNav/>
            <ScrollArea>
                <section>
                    <h1>Trippy</h1>
                    <h3>Mobile App to streamline the school trip planning process</h3>
                    <p>If you ever get the chance, ask a teacher "how do you find school trips"? Now this almost certainly depends on the kids theyre taking, however in general the paperworks a hassle and trippy aims to solve that.</p>
                    <div className="video-responsive">
                        <iframe
                            width="853"
                            height="480"
                            src={`https://www.youtube.com/embed/usUjBZ9Afok`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </div>
                </section>
            </ScrollArea>


        </div>
    );
}