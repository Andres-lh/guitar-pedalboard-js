
function Home() {
    
    const setupContext = async () => {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            const context = new AudioContext;
            const gainNode = new GainNode(context, { gain: 10})
            const bassEQ = new BiquadFilterNode(context, {
                type: 'lowshelf',
                frequency: 500,
                gain: 5
            })
            const midEQ = new BiquadFilterNode(context, {
                type: 'peaking',
                Q: Math.SQRT1_2,
                frequency: 1500,
                gain: 5
            })
            const trebleEQ = new BiquadFilterNode(context, {
                type: 'highshelf',
                frequency: 3000,
                gain: 5
            })
            const guitar = await getGuitar();
            if (context.state === 'suspended') {
                await context.resume()
            }
            const source = context.createMediaStreamSource(guitar)
            source
                .connect(bassEQ)
                .connect(midEQ)
                .connect(trebleEQ)
                .connect(gainNode)
                .connect(context.destination)
        } catch (error) {
            console.log(error.message)
        }  
    }

    
    const getGuitar = () => { 
        return navigator.mediaDevices.getUserMedia({
            audio : {
                echoCancellation: false,
                googEchoCancellation: false,
                googAutoGainControl: false,
                googNoiseSuppression: false,
                googHighpassFilter: false,
                latency: 0
            }
        })
    }

    return (
        <div>
            <h1>hola</h1>
            <button onClick={setupContext}>Play</button>
        </div>
    )
}

export default Home;
