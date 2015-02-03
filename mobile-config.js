App.info({
  name: 'Flashcards',
  description: 'Memorize Javascript or other languages via spaced repetition software.',
  version: '0.0.1'
});

App.icons({
  'iphone': 'resources/icons/icon-60.png',
  'iphone_2x': 'resources/icons/icon-60@2x.png',
  'ipad': 'resources/icons/icon-76.png'
  'ipad_2x': 'resources/icons/icon-76@2x.png'
});

App.launchScreens({
  'iphone': 'resources/splash/Default~iphone.png',
  'iphone_2x': 'resources/splash/Default@2x~iphone.png',
  'iphone5': 'resources/splash/Default-568h@2x~iphone.png',
});

App.setPreference('StatusBarStyle', 'black-translucent');
