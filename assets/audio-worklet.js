export class MyAudioWorkletProcessor extends AudioWorkletProcessor {
    constructor() {
      super()
      // this.port.onmessage = (event) => {
      //   // Process audio data if needed
      //   console.log(event.data)
      //  try{
      //   const inputBuffer = event.data;
      //   this.port.postMessage(inputBuffer);
      //  }
      //  catch(error){
      //   console.log("AudioWorkletProcessor :: ", error)
      //  }
      // };
    }
  
    process(inputs, outputs, parameters) {
      try {
        
        const inputChannel = inputs[0][0];
        // Create a Float32Array to hold the processed data
        const outputBuffer = new Float32Array(inputChannel.length);
    
        // Perform any processing here (e.g., filtering, analysis, etc.)
        // For now, simply copy the input data to the output buffer
        outputBuffer.set(inputChannel);
    
        // Send the processed data back to the main thread
        this.port.postMessage(outputBuffer);
    
        // Continue processing
        return true;
      } catch (error) {
          console.error('Error in AudioWorkletProcessor:', error);
          return false;
      }
    }
  }
  
  registerProcessor('audio-worklet-processor', MyAudioWorkletProcessor);