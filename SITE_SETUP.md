# ನಮ್ಮ ನದಿ (Namma Nadi)

ಮೊಬೈಲ್ ಬಳಕೆದಾರರನ್ನು ಗಮನದಲ್ಲಿಟ್ಟುಕೊಂಡ, ಸರಳ ಸ್ಥಿರ ವೆಬ್‌ಸೈಟ್. ಯಾವುದೇ build step ಅಥವಾ paid service ಅಗತ್ಯವಿಲ್ಲ.

## ಸ್ಥಳೀಯವಾಗಿ ತೆರೆಯುವುದು

`index.html` ಅನ್ನು ಬ್ರೌಸರ್‌ನಲ್ಲಿ ತೆರೆಯಿರಿ. ಅಥವಾ ಸರಳ ಸ್ಥಳೀಯ server ಬಳಸಿ: `python3 -m http.server 8000`, ನಂತರ `http://localhost:8000` ಗೆ ಹೋಗಿ.

## ಅಭಿಯಾನದ ಲಿಂಕ್‌ಗಳನ್ನು ಸೇರಿಸುವುದು

`config.js` ನಲ್ಲಿ `whatsapp`, `instagram`, `facebook`, `youtube`, `survey` ಮೌಲ್ಯಗಳಿಗೆ ಪೂರ್ಣ `https://` ವಿಳಾಸಗಳನ್ನು ಸೇರಿಸಿ. ಖಾಲಿ ಮೌಲ್ಯಗಳಿದ್ದಾಗ ಲಿಂಕ್‌ಗಳು ಸಕ್ರಿಯವಾಗುವುದಿಲ್ಲ.

Embed ಗಾಗಿ `instagramEmbed` ಗೆ ಸಾರ್ವಜನಿಕ Instagram ಪೋಸ್ಟ್/Reel URL, `facebookPage` ಗೆ Facebook Page URL ಮತ್ತು `youtubeEmbedUrl` ಗೆ YouTube embed URL ಸೇರಿಸಿ. ಖಾಲಿ embed ಮೌಲ್ಯಗಳಿಗೆ ಜಾಗ ತೋರಿಸುವುದಿಲ್ಲ. Instagram profile ಅನ್ನು ನೇರವಾಗಿ embed ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ; ಸಾರ್ವಜನಿಕ ಪೋಸ್ಟ್ ಅಥವಾ Reel ಬಳಸಬಹುದು. ಸಮೀಕ್ಷೆ ಸಂಗ್ರಹಿಸಲು Google Forms ಅಥವಾ ಬೇರೆ form URL ಅನ್ನು `survey` ಗೆ ಹಾಕಿ.

ಮುಖಪುಟದ ಚಿತ್ರಗಳು Wikimedia Commons‌ನಿಂದ ಬಾಹ್ಯವಾಗಿ ಲೋಡ್ ಆಗುತ್ತವೆ. ಪ್ರತಿ ಚಿತ್ರದ ಕೆಳಗೆ ಛಾಯಾಗ್ರಾಹಕ, ಪರವಾನಗಿ ಮತ್ತು ಮೂಲ ಪುಟದ ಕೊಂಡಿ ನೀಡಲಾಗಿದೆ. ಚಿತ್ರಗಳು ಸ್ಥಳವನ್ನು ಪರಿಚಯಿಸಲು ಮಾತ್ರ; ಯೋಜನಾ ಪರಿಣಾಮಗಳಿಗೆ ಸಾಕ್ಷ್ಯವಾಗಿ ಬಳಸಿಲ್ಲ.

## ಪ್ರಕಟಣೆ

ಇದು HTML/CSS/JavaScript ಮಾತ್ರ ಇರುವ ಸ್ಥಿರ ಸೈಟ್. GitHub ಗೆ push ಮಾಡಿದ ನಂತರ Vercel ನಲ್ಲಿ repository ಅನ್ನು import ಮಾಡಿ, Framework Preset ಅನ್ನು `Other` ಅಥವಾ `No Framework` ಆಗಿ ಆಯ್ಕೆ ಮಾಡಿ, Build Command ಖಾಲಿ ಇಟ್ಟು, Output Directory ಅನ್ನು `.` ಎಂದು ಹೊಂದಿಸಿ deploy ಮಾಡಬಹುದು. Repository ಯಲ್ಲಿ `vercel.json` ಅಗತ್ಯವಿಲ್ಲ. ಡೊಮೇನ್ ಅನ್ನು ನಂತರ Vercel project settings ನಲ್ಲಿ ಜೋಡಿಸಬಹುದು.

ಈ checkout ನಲ್ಲಿ Git remote ಇಲ್ಲ; GitHub repository URL ಜೋಡಿಸಿ push ಮಾಡಿದ ನಂತರ ಮಾತ್ರ Vercel ಗೆ import ಮಾಡಲು ಸಾಧ್ಯ.
