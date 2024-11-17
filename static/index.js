const recordButton = document.getElementById('record');
const statusText = document.getElementById('status');
const suggestionsList = document.getElementById('suggestions');

recordButton.addEventListener('click', async () => {
    statusText.textContent = 'Recording...';
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    // const mediaRecorder = new MediaRecorder(stream);
	const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });

    const audioChunks = [];

    mediaRecorder.ondataavailable = event => {
        audioChunks.push(event.data);
    };

    mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const formData = new FormData();
        formData.append('audio', audioBlob, 'voice.wav');

        statusText.textContent = 'Processing...';

        const response = await fetch('/voice-input', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        if (data.error) {
            statusText.textContent = 'Error: ' + data.error;
        } else {
            statusText.textContent = 'Suggestions:';
            suggestionsList.innerHTML = '';
            data.suggestions.forEach(word => {
                const li = document.createElement('li');
                li.textContent = word;
                suggestionsList.appendChild(li);
            });
        }
    };

    mediaRecorder.start();

    setTimeout(() => {
        mediaRecorder.stop();
        stream.getTracks().forEach(track => track.stop());
    }, 3000);
});
