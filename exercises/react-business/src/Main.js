import React from 'react';

const Main = () => {
    return (
        <body>
            <div className="Content">
                <div className="products">
                    <div className="prod1">
                        <img className="prod1Img" src="https://vignette.wikia.nocookie.net/avp/images/4/49/Spectagraph.jpg/revision/latest?cb=20120625054025" alt=""/>
                        <p>The <b>Parameter Uplink Spectagraph</b>, commonly abbreviated to simply Spectagraph or PUPS, was an automated, orb-shaped three-dimensional mapping device developed by Weyland Corp as the next generation piece of equipment for geologists and engineers. Its purpose was surveying unknown planetary terrain during the pre-terraforming process. This was achieved through an omni-directional laser that created a live 3D map topography along with detailed scanned images being sent to a viewing platform. The shell was composed of a new hyper-conducting material that allowed for smooth self-propelled flight in any atmosphere. A polymer film bio-sensor was used to detect airborne toxins and lifeforms down to 500 nanometers.</p>
                    </div>
                    <div className="prod2">
                        <img className="prod2Img" src="https://vignette.wikia.nocookie.net/avp/images/2/2a/Weyland_Modular_Computing_Device.jpg/revision/latest?cb=20120625185735" alt=""/>
                        <p>The <b>Modular Computing Device (WMCD)</b> was a device invented by Weyland Corp in 2024 and later perfected by 2073. It provided full audio, visual and kinesthetic enhancement to any room and any site. The WMCD picked up live video feeds from remote receivers and filled any space with visual or audio of an environment in real-time. These devices also recreated a full-surround environment of a specific location from any point in time for either academic study or personal entertainment.</p>
                    </div>
                    <div className="prod3">
                        <p>The <b>Zero-loss Lithium Ion Battery (LIB)</b> is a power source developed by Weyland Corp. They are composed of traditional lithium though held rare metal cathodes along with nano-layered silicon anodes. The latest generation produced by Weyland had ultra-low internal resistance with zero memory loss. These LIBs were used for all manners of equipment from hypersleep Chamber backup systems onboard deep space missions and classroom HoloTabs. A Zero-loss LIB system is capable of being deposited on a single layer of graphene substrate thus making them nearly invisible forms of portable power generation.</p>
                    </div>
                    <details className="founder">
                        <summary><img className="pwimg" src="https://vignette.wikia.nocookie.net/avp/images/0/07/Weylandcovenant2.png/revision/latest?cb=20170527170406" alt=""/><b>Rise of a Maverick</b></summary>
                        <p class="fText"> On March 27, 2015, Weyland made his first billion thanks to the renewable energy gathered following the installation of solar panels that align and move in Earth’s orbital plane but at an axial tilt, imitating a perpetual summer solstice. This is the first successfully industrialized space mission of the Weyland Corporation, which receives funding from a trio of major venture capital firms. On February 2, 2016, he effectively ended global warming by generating a localized synthetic atmosphere above the polar ice caps using a precursor to the atmospheric processor of his own invention. Three months later, at the age of 26, Sir Peter Weyland became one of the youngest people ever to achieve a knighthood.</p>
                    </details>
                </div> 
            </div>
        </body>
    )
}

export default Main;