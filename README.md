# demo voice Flask

Explanation
Voice Input: The front end captures voice input using the MediaRecorder API.
Audio Processing: The voice input is sent to the backend as an audio file.
Speech Recognition: The backend processes the audio using SpeechRecognition and extracts the text.
Autosuggest: The backend uses rapidfuzz for fuzzy matching to suggest similar words based on the input text.
Response: The suggestions are sent back to the front end and displayed.


## FFmpeg

Extract and Set Up FFmpeg:

Extract the zip file to a folder, e.g., C:\ffmpeg.
Inside C:\ffmpeg, you should see the bin folder with ffmpeg.exe.
Add FFmpeg to PATH:

Open the Start menu and search for Environment Variables.
Click on Edit the system environment variables.
In the System Properties window, click on Environment Variables.
Under System Variables, find the Path variable and click Edit.
Click New and add the path to the bin folder, e.g., C:\ffmpeg\bin.
Click OK to close all dialog boxes.
Verify FFmpeg Installation:

Open Command Prompt and run:
ffmpeg -version

You should see the information for the FFmpeg version. If you get an error, the installation is not successful.

 
