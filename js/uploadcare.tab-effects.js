/**
 * uploadcareTabEffects 1.3.0
 * Effects Tab for Uploadcare Widget. Edit images in desktop and mobile browsers.
 * https://github.com/uploadcare/uploadcare-widget-tab-effects#readme
 * Date: 2018-09-21
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('uploadcare-widget')) :
	typeof define === 'function' && define.amd ? define(['uploadcare-widget'], factory) :
	(global.uploadcareTabEffects = factory(global.uploadcare));
}(this, (function (uploadcare) { 'use strict';

function __$styleInject (css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
  return returnValue;
}
__$styleInject("\n.uploadcare-tab-effects--crops{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;max-width:100%}\n.uploadcare-tab-effects--effect-button{-ms-flex-negative:1;flex-shrink:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;padding:0;width:45px;height:45px;border-color:transparent;background:transparent;color:#212121;fill:#212121}.uploadcare-tab-effects--effect-button:active,.uploadcare-tab-effects--effect-button:focus,.uploadcare-tab-effects--effect-button:hover{fill:#0969ee;color:#0969ee}.uploadcare-tab-effects--effect-button:focus,.uploadcare-tab-effects--effect-button:hover{border-color:transparent;background:transparent}.uploadcare-tab-effects--effect-button[aria-disabled=true]{border-color:transparent!important;background:transparent!important;color:#d4d2d2!important;fill:#d4d2d2!important}.uploadcare-tab-effects--effect-button:before{content:\"\";display:block;-ms-flex-order:1;order:1;margin:1px 0;width:6px;height:6px;background:transparent;border-radius:50%}.uploadcare-tab-effects--effect-button_applied:before{background:#157cfc}@media (min-width:760px){.uploadcare-tab-effects--effect-button:focus,.uploadcare-tab-effects--effect-button:hover{position:relative;overflow:visible}.uploadcare-tab-effects--effect-button:focus:after,.uploadcare-tab-effects--effect-button:hover:after{content:attr(aria-label);display:block;position:absolute;top:0;left:50%;width:auto;height:auto;background:#e3e1e1;color:#212121;-webkit-transform:translateX(-50%) translateY(-100%);transform:translateX(-50%) translateY(-100%);padding:12px;border-radius:6px;line-height:1;min-width:100%}}\n.uploadcare-tab-effects--icon{height:32px}\n.uploadcare-tab-effects--effects{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;max-width:100%}\n.uploadcare-tab-effects--additions{-ms-flex-positive:1;flex-grow:1}\n\n\n.uploadcare-tab-effects--range{-ms-flex-positive:1;flex-grow:1}input[type=range].uploadcare-tab-effects--range__input{box-sizing:border-box;margin:0;padding:0;width:100%;height:40px;line-height:1}input[type=range].uploadcare-tab-effects--range__input:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}input[type=range].uploadcare-tab-effects--range__input::-moz-range-track{background:#d4d2d2}input[type=range].uploadcare-tab-effects--range__input::-moz-range-progress{background:#157cfc}input[type=range].uploadcare-tab-effects--range__input::-moz-range-thumb{border:none;background:#212121;box-shadow:none}input[type=range].uploadcare-tab-effects--range__input::-moz-range-thumb:focus,input[type=range].uploadcare-tab-effects--range__input::-moz-range-thumb:hover{background:#000}input[type=range].uploadcare-tab-effects--range__input::-moz-range-thumb:active{background:#000}input[type=range].uploadcare-tab-effects--range__input::-ms-track{background:#d4d2d2}input[type=range].uploadcare-tab-effects--range__input::-ms-fill-lower{background:#157cfc}input[type=range].uploadcare-tab-effects--range__input::-ms-thumb{background:#212121}input[type=range].uploadcare-tab-effects--range__input::-ms-thumb:active,input[type=range].uploadcare-tab-effects--range__input:focus::-ms-thumb{background:#000}")

uploadcare = uploadcare && 'default' in uploadcare ? uploadcare['default'] : uploadcare;

var en = {
  effects: {
    captions: {
      blur: 'Blur',
      crop: 'Crop',
      enhance: 'Enhance',
      flip: 'Flip',
      grayscale: 'Grayscale',
      invert: 'Invert',
      mirror: 'Mirror',
      rotate: 'Rotate',
      sharp: 'Sharpen'
    },
    apply: 'Apply'
  }
};

var fr = {
  effects: {
    captions: {
      blur: 'Flouter',
      crop: 'Recadrer',
      enhance: 'Effets',
      flip: 'Retourner',
      grayscale: 'Noir et blanc',
      invert: 'Inverser',
      mirror: 'Mirroir',
      rotate: 'Tourner',
      sharp: 'Netteté'
    },
    apply: 'Appliquer'
  }
};

var ru = {
  effects: {
    captions: {
      blur: 'Размытие',
      crop: 'Обрезка',
      enhance: 'Улучшение',
      flip: 'Отразить по вертикали',
      grayscale: 'Оттенки серого',
      invert: 'Инвертировать',
      mirror: 'Отразить по горизонтали',
      rotate: 'Повернуть',
      sharp: 'Резкость'
    },
    apply: 'Применить'
  }
};



var locale = Object.freeze({
	en: en,
	fr: fr,
	ru: ru
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};



















var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var configureTranslations = function configureTranslations(translations) {
  var newTranslations = _extends({}, translations);

  for (var key in locale) {
    if (newTranslations.hasOwnProperty(key)) {
      newTranslations[key] = _extends({}, newTranslations[key], locale[key]);
    }
  }

  return newTranslations;
};

var createNode = function createNode(html) {
  return new DOMParser().parseFromString(html, 'text/html').body.firstChild;
};

function customExtends(child, parent) {
  for (var key in parent) {
    if (Object.prototype.hasOwnProperty.call(parent, key)) {
      child[key] = parent[key];
    }
  }

  function Ctor() {
    this.constructor = child;
  }

  Ctor.prototype = parent.prototype;
  child.prototype = new Ctor();
  child.__super__ = parent.prototype;

  return child;
}

var effectsDefaults = {
  blur: ['number', 10],
  enhance: ['number', 50],
  flip: ['boolean'],
  grayscale: ['boolean'],
  invert: ['boolean'],
  mirror: ['boolean'],
  rotate: ['number'],
  sharp: ['number', 5]
};

var modifierRegExp = {
  blur: /-\/blur\/(([0-9]+)\/|)/i,
  crop: /-\/crop\/([0-9]+)x([0-9]+)(\/(center|([0-9]+),([0-9]+)))?\//i,
  enhance: /-\/enhance\/(([0-9]+)\/|)/i,
  flip: /-\/flip\//i,
  grayscale: /-\/grayscale\//i,
  invert: /-\/invert\//i,
  mirror: /-\/mirror\//i,
  rotate: /-\/rotate\/(([0-9]+)\/)/i,
  sharp: /-\/sharp\/(([0-9]+)\/|)/i
};

function effectsFromModifiers(cdnUrlModifiers, settingsEffects) {
  if (!cdnUrlModifiers) {
    return {
      effects: {},
      otherModifiers: ''
    };
  }

  var effects = {};
  var otherModifiers = cdnUrlModifiers.replace(/-\/preview\//g, '');

  settingsEffects.forEach(function (settingsEffect) {
    if (modifierRegExp[settingsEffect]) {
      var foundModifier = cdnUrlModifiers.match(modifierRegExp[settingsEffect]);

      if (foundModifier) {
        var effectValue = void 0;

        if (settingsEffect === 'crop') {
          effectValue = {
            coords: {
              width: parseInt(foundModifier[1]),
              height: parseInt(foundModifier[2]),
              center: foundModifier[4] === 'center',
              left: foundModifier[5] === undefined ? undefined : parseInt(foundModifier[5]),
              top: foundModifier[6] === undefined ? undefined : parseInt(foundModifier[6])
            }
          };
        } else {
          if (effectsDefaults[settingsEffect][0] === 'boolean') {
            effectValue = true;
          }
          if (effectsDefaults[settingsEffect][0] === 'number') {
            effectValue = foundModifier[2] === undefined ? effectsDefaults[settingsEffect][1] : parseInt(foundModifier[2]);
          }
        }

        effects[settingsEffect] = effectValue;
        otherModifiers = otherModifiers.replace(foundModifier[0], '');
      }
    }
  });

  return {
    effects: effects,
    otherModifiers: otherModifiers
  };
}

var initialState = {
  view: 'preview',
  image: {},
  appliedEffects: {
    blur: 0,
    crop: null,
    enhance: 0,
    flip: false,
    grayscale: false,
    invert: false,
    mirror: false,
    rotate: 0,
    sharp: 0
  },
  otherModifiers: ''
};

var getAppliedEffects = function getAppliedEffects(settingsEffects) {
  var initialAppliedEffects = initialState.appliedEffects;

  var appliedEffects = {};

  settingsEffects.forEach(function (settingsEffect) {
    if (initialAppliedEffects[settingsEffect] !== undefined) {
      appliedEffects[settingsEffect] = initialAppliedEffects[settingsEffect];
    }
  });

  return appliedEffects;
};

var getModifiersByCrop = function getModifiersByCrop(crop) {
  var size = crop.originalSize;
  var _crop$coords = crop.coords,
      width = _crop$coords.width,
      height = _crop$coords.height,
      center = _crop$coords.center,
      left = _crop$coords.left,
      top = _crop$coords.top;
  // const prefered = this.crop.preferedSize

  var modifiers = '';

  if (size) {
    var wholeImage = width === size[0] && height === size[1];

    if (!wholeImage) {
      modifiers += '-/crop/' + width + 'x' + height + '/' + left + ',' + top + '/';
    }
  } else {
    modifiers += '-/crop/' + width + 'x' + height + '/';

    if (center) {
      modifiers += 'center/';
    } else if (left !== undefined && top !== undefined) {
      modifiers += left + ',' + top + '/';
    }
  }

  // const downscale = this.crop.downscale && (width > prefered[0] || height > prefered[1])
  // const upscale = this.crop.upscale && (width < prefered[0] || height < prefered[1])
  //
  // if (downscale || upscale) {
  //   // modifiers += `-/resize/${prefered.join('x')}/`
  // }

  return modifiers;
};

var getModifiersByEffects = function getModifiersByEffects(effects) {
  var withCrop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var withRFM = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var cdnUrlModifiers = '';

  for (var effect in effects) {
    if (effects[effect]) {
      switch (_typeof(effects[effect])) {
        case 'boolean':
          if (!withRFM && !!~['flip', 'mirror'].indexOf(effect)) {
            break;
          }
          cdnUrlModifiers += '-/' + effect + '/';
          break;
        case 'number':
          if (!withRFM && effect === 'rotate') {
            break;
          }
          cdnUrlModifiers += '-/' + effect + '/' + effects[effect] + '/';
          break;
        case 'object':
          if (effect === 'crop' && withCrop) {
            cdnUrlModifiers += getModifiersByCrop(effects[effect]) + '-/preview/';
          }
          break;
      }
    }
  }

  if (cdnUrlModifiers) {
    cdnUrlModifiers = effects['crop'] && withCrop ? cdnUrlModifiers : '-/preview/' + cdnUrlModifiers;
  } else {
    cdnUrlModifiers = '';
  }

  return cdnUrlModifiers;
};

var rotateValues = [0, 270, 180, 90];
var getNextRotateValue = function getNextRotateValue(currentValue) {
  var currentIndex = rotateValues.indexOf(currentValue);

  if (!~currentIndex || currentIndex === rotateValues.length - 1) {
    return rotateValues[0];
  }

  return rotateValues[currentIndex + 1];
};

var getSettingsCrop = function getSettingsCrop(crop, effects) {
  if (crop || !~effects.indexOf('crop')) {
    return crop;
  }

  return [{
    downscale: false,
    notLess: false,
    preferedSize: undefined,
    upscale: false
  }];
};

var initialSettings = { effects: ['crop', 'rotate', 'enhance', 'sharp', 'grayscale'] };

var ALL_EFFECTS = ['crop', 'rotate', 'mirror', 'flip', 'blur', 'sharp', 'enhance', 'grayscale', 'invert'];

var getSettingsEffects = function getSettingsEffects(value) {
  var settingsEffects = [];

  if (typeof value === 'string' && value === 'all') {
    return ALL_EFFECTS;
  }

  if (typeof value === 'string') {
    settingsEffects = value.replace(/\s/g, '').split(',');
  } else if (Array.isArray(value)) {
    settingsEffects = value;
  } else {
    settingsEffects = initialSettings.effects;
  }

  var cropIndex = settingsEffects.indexOf('crop');

  if (!!~cropIndex && cropIndex !== 0) {
    settingsEffects = ['crop'].concat(toConsumableArray(settingsEffects.slice(0, cropIndex)), toConsumableArray(settingsEffects.slice(cropIndex + 1)));
  }

  return settingsEffects;
};

var getGlobalSettingsByKey = function getGlobalSettingsByKey(key) {
  var value = window['UPLOADCARE_' + key.toUpperCase()];

  return typeof value === 'undefined' ? null : value;
};

var autoCrop = function autoCrop(store, settings, uc) {
  var cropSettings = settings.crop,
      multiple = settings.multiple;

  var _store$getState = store.getState(),
      image = _store$getState.image;

  // auto-crop only in single mode with free crop disabled


  if (multiple || cropSettings.some(function (c) {
    return !c.preferedSize;
  })) {
    return;
  }

  if (!image.isImage || image.cdnUrlModifiers || image.crop) {
    return;
  }

  var info = image.originalImageInfo;
  var size = uc.utils.fitSize(settings.crop[0].preferedSize, [info.width, info.height], true);

  var crop = {
    originalSize: [info.width, info.height],
    coords: {
      left: Math.round((info.width - size[0]) / 2),
      top: Math.round((info.height - size[1]) / 2),
      width: size[0],
      height: size[1]
    }
  };

  store.setAppliedEffect({ crop: crop });
  store.rebuildImage();
};

var configureSettings = function configureSettings(settings) {
  var effects = getSettingsEffects(settings.effects);
  var crop = getSettingsCrop(settings.crop, effects);

  return _extends({}, settings, { crop: crop }, { effects: effects });
};

var createStore = function createStore(initialState) {
  var state = initialState;
  var listeners = {
    view: [],
    imageLoad: [],
    appliedEffects: [],
    image: []
  };

  var getState = function getState() {
    return state;
  };

  var setAppliedEffect = function setAppliedEffect(appliedEffect) {
    var appliedEffects = _extends({}, state.appliedEffects, appliedEffect);

    state = _extends({}, state, { appliedEffects: appliedEffects });
    listeners['appliedEffects'].forEach(function (listener) {
      return listener();
    });
  };

  var setView = function setView(view) {
    state = _extends({}, state, { view: view });
    listeners['view'].forEach(function (listener) {
      return listener();
    });
  };

  var setImageLoad = function setImageLoad(imageLoad) {
    state = _extends({}, state, { imageLoad: imageLoad });
    listeners['imageLoad'].forEach(function (listener) {
      return listener();
    });
  };

  var rebuildImage = function rebuildImage() {
    var _state = state,
        appliedEffects = _state.appliedEffects,
        image = _state.image;

    var cdnUrlModifiers = getModifiersByEffects(appliedEffects) + state.otherModifiers;

    state.image = _extends({}, image, {
      cdnUrl: image.originalUrl + (cdnUrlModifiers || ''),
      cdnUrlModifiers: cdnUrlModifiers
    });

    listeners['image'].forEach(function (listener) {
      return listener();
    });
  };

  var subscribe = function subscribe(listener, source) {
    listeners[source].push(listener);

    return function () {
      listeners[source] = listeners[source].filter(function (l) {
        return l !== listener;
      });
    };
  };

  var subscribeToAppliedEffects = function subscribeToAppliedEffects(listener) {
    return subscribe(listener, 'appliedEffects');
  };
  var subscribeToView = function subscribeToView(listener) {
    return subscribe(listener, 'view');
  };
  var subscribeToImageLoad = function subscribeToImageLoad(listener) {
    return subscribe(listener, 'imageLoad');
  };
  var subscribeToImage = function subscribeToImage(listener) {
    return subscribe(listener, 'image');
  };

  return {
    getState: getState,
    setView: setView,
    setImageLoad: setImageLoad,
    setAppliedEffect: setAppliedEffect,
    rebuildImage: rebuildImage,
    subscribeToView: subscribeToView,
    subscribeToImageLoad: subscribeToImageLoad,
    subscribeToImage: subscribeToImage,
    subscribeToAppliedEffects: subscribeToAppliedEffects
  };
};

var configureStore = function configureStore(image, settings) {
  var effects = settings.effects;

  var appliedEffects = getAppliedEffects(effects);
  var appliedEffectsFromModifiers = effectsFromModifiers(image.cdnUrlModifiers, effects);

  return createStore(_extends({}, initialState, { image: image }, {
    appliedEffects: _extends({}, appliedEffects, appliedEffectsFromModifiers.effects)
  }, { otherModifiers: appliedEffectsFromModifiers.otherModifiers }));
};

var template = (function (_) {
  return "<div class=\"uploadcare--tab__content uploadcare--preview__content uploadcare--preview__content_crop\"></div>\n";
});

var Content = function Content() {
  var $element = void 0;

  var getElement = function getElement() {
    if (!$element) {
      render();
    }

    return $element;
  };

  var render = function render() {
    $element = createNode(template());
  };

  var appendChild = function appendChild($child) {
    if (!$element) return;

    $element.appendChild($child);
  };

  return {
    getElement: getElement,
    appendChild: appendChild
  };
};

var cn = { "crop-button": "uploadcare-tab-effects--crop-button", "crop-button__icon": "uploadcare-tab-effects--crop-button__icon", "cropButton": "uploadcare-tab-effects--crop-button", "cropButton__icon": "uploadcare-tab-effects--crop-button__icon" };

var template$1 = (function (_) {
  return '<div role="button" tabindex="0" class="uploadcare--button uploadcare--button_icon uploadcare--crop-sizes__item ' + _.cn['crop-button'] + '" data-caption="' + _.title + '">\n  <div class="uploadcare--crop-sizes__icon ' + _.cn['crop-button__icon'] + '"></div>\n</div>\n';
});

var APPLIED_CLASS_NAME = 'uploadcare--crop-sizes__item_current';
var ICON_FREE_CLASS_NAME = 'uploadcare--crop-sizes__icon_free';

var CropButton = function CropButton(props) {
  var $element = void 0;
  var size = props.size,
      title = props.title,
      onClick = props.onClick;

  var state = {
    applied: props.applied || false,
    disabled: props.disabled || false
  };

  var getElement = function getElement() {
    if (!$element) {
      render();
    }

    return $element;
  };

  var render = function render() {
    $element = createNode(template$1({
      title: title,
      cn: cn
    }));

    setupIcon();

    if (state.applied) {
      $element.classList.add(APPLIED_CLASS_NAME);
    }

    $element.addEventListener('click', handleClick);
  };

  var setupIcon = function setupIcon() {
    var $icon = $element.querySelector('.' + cn['crop-button__icon']);
    var width = size.width,
        height = size.height;


    if (width && height) {
      $icon.style.width = width;
      $icon.style.height = height;
    } else {
      $icon.innerHTML = '\n<svg width="32" height="32" role="presentation" class="uploadcare--icon">\n  <use xlink:href="#uploadcare--icon-crop-free"/>\n</svg>\n      ';
      $icon.classList.add(ICON_FREE_CLASS_NAME);
    }
  };

  var handleClick = function handleClick() {
    if (state.disabled || !onClick) return;

    onClick();
  };

  var toggleApplied = function toggleApplied(applied) {
    if (!$element || state.applied === applied) return;

    state.applied = applied;

    $element.classList[applied ? 'add' : 'remove'](APPLIED_CLASS_NAME);
  };

  var toggleDisabled = function toggleDisabled(disabled) {
    if (!$element || state.disabled === disabled) return;

    state.disabled = disabled;

    $element.setAttribute('aria-disabled', disabled);
    $element.setAttribute('tabindex', disabled ? '-1' : '0');
  };

  return {
    getElement: getElement,
    toggleApplied: toggleApplied,
    toggleDisabled: toggleDisabled
  };
};

var cn$1 = { "crops": "uploadcare-tab-effects--crops" };

var template$2 = (function (_) {
  return "<div class=\"" + _.cn.crops + "\"></div>\n";
});

var Crops = function Crops(props) {
  var $element = void 0;
  var buttons = [];
  var crops$$1 = props.crops,
      onCropClick = props.onCropClick;

  var state = { currentCrop: props.currentCrop || 0 };

  var getElement = function getElement() {
    if (!$element) {
      render();
    }

    return $element;
  };

  var render = function render() {
    $element = createNode(template$2({ cn: cn$1 }));

    crops$$1.forEach(function (crop) {
      var index = crop.index,
          size = crop.size,
          title = crop.title;


      buttons[index] = new CropButton({
        size: size,
        title: title,
        applied: state.currentCrop === index,
        onClick: function onClick() {
          if (state.currentCrop === index) return;

          updateApplied(index);
          onCropClick(crop);
        }
      });
    });

    buttons.forEach(function (button) {
      return $element.appendChild(button.getElement());
    });
  };

  var toggleDisabled = function toggleDisabled(isDisabled) {
    if (!buttons) return;

    buttons.forEach(function (button) {
      return button.toggleDisabled(isDisabled);
    });
  };

  var updateApplied = function updateApplied(currentCrop) {
    if (!buttons) return;

    state.currentCrop = currentCrop;

    buttons.forEach(function (button, index) {
      return button.toggleApplied(index === currentCrop);
    });
  };

  return {
    getElement: getElement,
    toggleDisabled: toggleDisabled,
    updateApplied: updateApplied
  };
};

var cn$2 = { "effect-button": "uploadcare-tab-effects--effect-button", "effect-button_applied": "uploadcare-tab-effects--effect-button_applied", "effectButton": "uploadcare-tab-effects--effect-button", "effectButton_applied": "uploadcare-tab-effects--effect-button_applied" };

var template$3 = (function (_) {
  return '<div role="button" tabindex="0" class="uploadcare--button uploadcare--button_icon ' + _.cn['effect-button'] + '" aria-label="' + _.title + '"></div>\n';
});

var cn$3 = { "icon": "uploadcare-tab-effects--icon" };

var blur = (function (_) {
  return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n  <defs>\n    <filter id=\"filter-blur\" width=\"200%\" height=\"200%\" x=\"-50%\" y=\"-50%\" filterUnits=\"objectBoundingBox\">\n      <feGaussianBlur stdDeviation=\"3\" in=\"SourceGraphic\">\n    </feGaussianBlur></filter>\n  </defs>\n  <circle cx=\"16\" cy=\"16\" r=\"8\" filter=\"url(#filter-blur)\"></circle>\n</svg>\n";
});

var crop = (function (_) {
  return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n  <path d=\"M21,23 L10.9999602,23 C9.8967381,23 9,22.0989187 9,21.0000398 L9,11 L5,11 L5,9 L9,9 L9,5 L11,5 C11,5 11.0034766,21 10.9999602,21 L27,21 L27,23 L23,23 L23,27 L21,27 L21,23 Z M13,11 L13,9 L21.0046024,9 C22.1100735,9 23,9.89939484 23,11.0081317 L23,19.1279297 L21,19.1279297 L21,11.0081317 C21,11.00117 13,11 13,11 Z\"></path>\n</svg>\n";
});

var enhance = (function (_) {
  return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n  <path d=\"M4.29289322,24.0082521 L16.3137085,11.9874369 C16.7042328,11.5969126 17.3373978,11.5969126 17.7279221,11.9874369 L20.5563492,14.815864 C20.9468735,15.2063883 20.9468735,15.8395533 20.5563492,16.2300776 L8.53553391,28.2508928 C8.14500961,28.6414171 7.51184464,28.6414171 7.12132034,28.2508928 L4.29289322,25.4224657 C3.90236893,25.0319414 3.90236893,24.3987764 4.29289322,24.0082521 Z M14.7175144,16.4120581 L16.131728,17.8262716 L18.4350288,15.5229708 L17.0208153,14.1087572 L14.7175144,16.4120581 L14.7175144,16.4120581 Z M16.3411081,7.13592111 L13.8054564,6.33578644 L16.3411081,5.53565177 L17.1412428,3 L17.9413775,5.53565177 L20.4770292,6.33578644 L17.9413775,7.13592111 L17.1412428,9.67157288 L16.3411081,7.13592111 Z M24.5356518,13.8304648 L22,13.0303301 L24.5356518,12.2301954 L25.3357864,9.69454365 L26.1359211,12.2301954 L28.6715729,13.0303301 L26.1359211,13.8304648 L25.3357864,16.3661165 L24.5356518,13.8304648 Z M9.53565177,10.8304648 L7,10.0303301 L9.53565177,9.23019541 L10.3357864,6.69454365 L11.1359211,9.23019541 L13.6715729,10.0303301 L11.1359211,10.8304648 L10.3357864,13.3661165 L9.53565177,10.8304648 Z M22.5356518,21.8304648 L20,21.0303301 L22.5356518,20.2301954 L23.3357864,17.6945436 L24.1359211,20.2301954 L26.6715729,21.0303301 L24.1359211,21.8304648 L23.3357864,24.3661165 L22.5356518,21.8304648 Z\"></path>\n</svg>\n";
});

var flip = (function (_) {
  return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n  <path d=\"M15.3492086,13.7592566 L8.34920863,7.7592566 C7.64431003,7.15505781 8.07159372,6 9,6 L23,6 C23.9284063,6 24.35569,7.15505781 23.6507914,7.7592566 L16.6507914,13.7592566 C16.2763016,14.0802478 15.7236984,14.0802478 15.3492086,13.7592566 Z M15.3492086,18.2407434 C15.7236984,17.9197522 16.2763016,17.9197522 16.6507914,18.2407434 L23.6507914,24.2407434 C24.35569,24.8449422 23.9284063,26 23,26 L9,26 C8.07159372,26 7.64431003,24.8449422 8.34920863,24.2407434 L15.3492086,18.2407434 Z M11.7032574,24 L20.2967426,24 L16,20.3170778 L11.7032574,24 Z M27,15 L27,17 L25,17 L25,15 L27,15 Z M23,15 L23,17 L21,17 L21,15 L23,15 Z M19,15 L19,17 L17,17 L17,15 L19,15 Z M15,15 L15,17 L13,17 L13,15 L15,15 Z M11,15 L11,17 L9,17 L9,15 L11,15 Z M7,15 L7,17 L5,17 L5,15 L7,15 Z\"></path>\n</svg>\n";
});

var grayscale = (function (_) {
  return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n  <path d=\"M19.3596223,12.0563396 L21.926451,14.6231683 C21.8411716,15.2691808 21.6833431,15.8923164 21.4614188,16.484122 L17.1233611,12.1460643 C16.660957,12.2457748 16.2168493,12.3946804 15.7967877,12.5870314 L20.8981472,17.688391 C20.6220708,18.1749895 20.2993732,18.6316689 19.936127,19.0523568 L14.3668527,13.4830825 C14.0447797,13.7487243 13.7487243,14.0447797 13.4830825,14.3668527 L19.0523568,19.936127 C18.6316689,20.2993732 18.1749895,20.6220708 17.688391,20.8981472 L12.5870314,15.7967877 C12.3946804,16.2168493 12.2457748,16.660957 12.1460643,17.1233611 L16.484122,21.4614188 C15.8923164,21.6833431 15.2691808,21.8411716 14.6231683,21.926451 L12.0563396,19.3596223 C12.4769606,22.5431547 15.2015668,25 18.5,25 C22.0898509,25 25,22.0898509 25,18.5 C25,15.2015668 22.5431547,12.4769606 19.3596223,12.0563396 Z M10.5324038,21.4675962 C7.30134737,20.2636648 5,17.1505866 5,13.5 C5,8.80557963 8.80557963,5 13.5,5 C17.1505866,5 20.2636648,7.30134737 21.4675962,10.5324038 C24.6986526,11.7363352 27,14.8494134 27,18.5 C27,23.1944204 23.1944204,27 18.5,27 C14.8494134,27 11.7363352,24.6986526 10.5324038,21.4675962 L10.5324038,21.4675962 Z\"></path>\n</svg>\n";
});

var invert = (function (_) {
  return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <path d=\"M5,6.99180311 C5,5.89386312 5.90087297,5 6.99180311,5 L25.0081969,5 C26.1061369,5 27,5.90087297 27,6.99180311 L27,25.0081969 C27,26.1061369 26.099127,27 25.0081969,27 L6.99180311,27 C5.89386312,27 5,26.099127 5,25.0081969 L5,6.99180311 Z M25,7 L7,7 L7,25 L12.071629,19.928371 C13.0769868,20.9337288 14.4658757,21.5555556 16,21.5555556 C19.0682486,21.5555556 21.5555556,19.0682486 21.5555556,16 C21.5555556,14.4658757 20.9337288,13.0769868 19.928371,12.071629 L25,7 L25,7 Z M12.071629,19.928371 C11.0662712,18.9230132 10.4444444,17.5341243 10.4444444,16 C10.4444444,12.9317514 12.9317514,10.4444444 16,10.4444444 C17.5341243,10.4444444 18.9230132,11.0662712 19.928371,12.071629 L12.071629,19.928371 L12.071629,19.928371 Z\"></path>\n</svg>\n";
});

var mirror = (function (_) {
  return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n  <path d=\"M13.7592566,16.6507914 L7.7592566,23.6507914 C7.15505781,24.35569 6,23.9284063 6,23 L6,9 C6,8.07159372 7.15505781,7.64431003 7.7592566,8.34920863 L13.7592566,15.3492086 C14.0802478,15.7236984 14.0802478,16.2763016 13.7592566,16.6507914 Z M18.2407434,16.6507914 C17.9197522,16.2763016 17.9197522,15.7236984 18.2407434,15.3492086 L24.2407434,8.34920863 C24.8449422,7.64431003 26,8.07159372 26,9 L26,23 C26,23.9284063 24.8449422,24.35569 24.2407434,23.6507914 L18.2407434,16.6507914 Z M24,20.2967426 L24,11.7032574 L20.3170778,16 L24,20.2967426 Z M15,5 L17,5 L17,7 L15,7 L15,5 Z M15,9 L17,9 L17,11 L15,11 L15,9 Z M15,13 L17,13 L17,15 L15,15 L15,13 Z M15,17 L17,17 L17,19 L15,19 L15,17 Z M15,21 L17,21 L17,23 L15,23 L15,21 Z M15,25 L17,25 L17,27 L15,27 L15,25 Z\"></path>\n</svg>\n";
});

var rotate = (function (_) {
  return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n  <path d=\"M22.8449302,10.1550698 L22.8449302,10.1550698 C21.1616077,8.18356972 18.6836184,7 16,7 C11.0294373,7 7,11.0294373 7,16 C7,20.9705627 11.0294373,25 16,25 C18.6610655,25 21.131472,23.8397191 22.8318195,21.8591349 L24.3493086,23.1619115 C22.2729281,25.5805032 19.2506133,27 16,27 C9.92486775,27 5,22.0751322 5,16 C5,9.92486775 9.92486775,5 16,5 C19.224943,5 22.2084802,6.39983031 24.2627348,8.73726518 L27,6 L27,11.9970707 C27,12.5509732 26.5621186,13 25.9970707,13 L20,13 L22.8449302,10.1550698 Z M15,14 L17,14 C17.5522847,14 18,14.4477153 18,15 L18,17 C18,17.5522847 17.5522847,18 17,18 L15,18 C14.4477153,18 14,17.5522847 14,17 L14,15 C14,14.4477153 14.4477153,14 15,14 Z\"></path>\n</svg>\n";
});

var sharp = (function (_) {
  return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n  <polygon points=\"16 6 25 26 7 26\"></polygon>\n</svg>\n";
});



var icons = Object.freeze({
	blur: blur,
	crop: crop,
	enhance: enhance,
	flip: flip,
	grayscale: grayscale,
	invert: invert,
	mirror: mirror,
	rotate: rotate,
	sharp: sharp
});

var Icon = function Icon(props) {
  var name = props.name;


  if (!icons[name]) {
    throw new Error('Icon with name "' + name + '" doesn\'t exist.');
  }

  var $element = void 0;

  var getElement = function getElement() {
    if (!$element) {
      render();
    }

    return $element;
  };

  var render = function render() {
    $element = createNode(icons[name]());

    $element.setAttribute('class', $element.getAttribute('class') + ' ' + cn$3['icon']);
  };

  return { getElement: getElement };
};

var EffectButton = function EffectButton(props) {
  var $element = void 0;
  var effect = props.effect,
      title = props.title,
      onClick = props.onClick;

  var state = {
    applied: props.applied || false,
    disabled: props.disabled || false
  };

  var getElement = function getElement() {
    if (!$element) {
      render();
    }

    return $element;
  };

  var getEffect = function getEffect() {
    return effect;
  };

  var render = function render() {
    var _icon = new Icon({ name: effect });

    $element = createNode(template$3({
      title: title,
      cn: cn$2
    }));

    $element.appendChild(_icon.getElement());

    if (state.applied) {
      $element.classList.add(cn$2['effect-button_applied']);
    }

    $element.addEventListener('click', handleClick);
    $element.addEventListener('keypress', function (e) {
      if (e.code === 'Enter') {
        $element.dispatchEvent(new Event('click'));
        e.preventDefault();
        e.stopPropagation();
      }
    });
  };

  var handleClick = function handleClick() {
    if (state.disabled || !onClick) return;

    onClick();
  };

  var toggleApplied = function toggleApplied(applied) {
    if (!$element || state.applied === applied) return;

    state.applied = applied;

    $element.classList[applied ? 'add' : 'remove'](cn$2['effect-button_applied']);
  };

  var toggleDisabled = function toggleDisabled(disabled) {
    if (!$element || state.disabled === disabled) return;

    state.disabled = disabled;

    $element.setAttribute('aria-disabled', disabled);
    $element.setAttribute('tabindex', disabled ? -1 : 0);
  };

  return {
    getElement: getElement,
    getEffect: getEffect,
    toggleApplied: toggleApplied,
    toggleDisabled: toggleDisabled
  };
};

var cn$4 = { "effects": "uploadcare-tab-effects--effects" };

var template$4 = (function (_) {
  return "<div class=\"" + _.cn.effects + "\"></div>\n";
});

var Effects = function Effects(props) {
  var $element = void 0;
  var buttons = [];
  var effects$$1 = props.effects,
      titles = props.titles,
      onEffectClick = props.onEffectClick;

  var state = { appliedEffects: props.appliedEffects };

  var getElement = function getElement() {
    if (!$element) {
      render();
    }

    return $element;
  };

  var render = function render() {
    $element = createNode(template$4({ cn: cn$4 }));

    effects$$1.forEach(function (effect) {
      var title = titles[effect];

      buttons.push(new EffectButton({
        effect: effect,
        title: title,
        applied: !!state.appliedEffects[effect],
        onClick: function onClick() {
          return onEffectClick(effect);
        }
      }));
    });

    buttons.forEach(function (button) {
      return $element.appendChild(button.getElement());
    });
  };

  var toggleDisabled = function toggleDisabled(isDisabled) {
    if (!buttons) return;

    buttons.forEach(function (button) {
      return button.toggleDisabled(isDisabled);
    });
  };

  var updateApplied = function updateApplied(appliedEffects) {
    if (!buttons) return;

    state.appliedEffects = appliedEffects;

    buttons.forEach(function (button) {
      return button.toggleApplied(!!appliedEffects[button.getEffect()]);
    });
  };

  return {
    getElement: getElement,
    toggleDisabled: toggleDisabled,
    updateApplied: updateApplied
  };
};

var cn$5 = { "additions": "uploadcare-tab-effects--additions", "done": "uploadcare-tab-effects--done", "cancel": "uploadcare-tab-effects--cancel" };

var template$5 = (function (_) {
  return "<div class=\"uploadcare--footer uploadcare--tab__footer\">\n  <div class=\"uploadcare--footer__additions " + _.cn.additions + "\"></div>\n\n  <button type=\"button\" class=\"uploadcare--button uploadcare--footer__button uploadcare--preview__back " + _.cn.cancel + "\">\n    " + _.locale.cancel + "\n  </button>\n\n  <button type=\"button\" class=\"uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done " + _.cn.done + "\">\n    " + _.locale.done + "\n  </button>\n</div>\n";
});

var Footer = function Footer(props) {
  var $element = void 0;
  var $additionsElement = void 0;
  var $doneElement = void 0;
  var $cancelElement = void 0;
  var locale = props.locale,
      onDone = props.onDone,
      onCancel = props.onCancel;


  var getElement = function getElement() {
    if (!$element) {
      render();
    }

    return $element;
  };

  var render = function render() {
    $element = createNode(template$5({
      cn: cn$5,
      locale: locale
    }));

    $additionsElement = $element.querySelector('.' + cn$5.additions);
    $doneElement = $element.querySelector('.' + cn$5.done);
    $cancelElement = $element.querySelector('.' + cn$5.cancel);

    $doneElement.addEventListener('click', onDone);
    $cancelElement.addEventListener('click', onCancel);
  };

  var empty = function empty() {
    if (!$element) return;

    while ($additionsElement.firstChild) {
      $additionsElement.removeChild($additionsElement.firstChild);
    }
  };

  var appendChild = function appendChild(child) {
    if (!$element) return;

    $additionsElement.appendChild(child);
  };

  var toggleDisabled = function toggleDisabled(isDisabled) {
    if (!$doneElement) return;

    $doneElement.disabled = isDisabled;
  };

  var updateDoneTitle = function updateDoneTitle() {
    var newTitle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    $doneElement.innerText = newTitle ? newTitle : locale.done;
  };

  return {
    getElement: getElement,
    empty: empty,
    appendChild: appendChild,
    toggleDisabled: toggleDisabled,
    updateDoneTitle: updateDoneTitle
  };
};

var cn$6 = { "title": "uploadcare-tab-effects--title" };

var template$6 = (function (_) {
  return "<div class=\"uploadcare--tab__header\">\n  <div class=\"uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title " + _.cn.title + "\">\n    " + _.title + "\n  </div>\n</div>\n";
});

var Header = function Header(props) {
  var $element = void 0;
  var $titleElement = void 0;
  var title$$1 = props.title;


  var getElement = function getElement() {
    if (!$element) {
      render();
    }

    return $element;
  };

  var render = function render() {
    $element = createNode(template$6({
      title: title$$1,
      cn: cn$6
    }));

    $titleElement = $element.querySelector('.' + cn$6.title);
  };

  var updateTitle = function updateTitle(title$$1) {
    if (!$titleElement) return;

    $titleElement.innerText = title$$1;
  };

  return {
    getElement: getElement,
    updateTitle: updateTitle
  };
};

var cn$7 = { "image": "uploadcare-tab-effects--image", "image-container": "uploadcare-tab-effects--image-container", "imageContainer": "uploadcare-tab-effects--image-container" };

var template$7 = (function (_) {
  return '<div class="uploadcare--media ' + _.cn['image-container'] + '">\n  <img src="' + _.imageUrl + '" alt="" class="uploadcare--media__image uploadcare--preview__image ' + _.cn.image + '">\n</div>\n';
});

var Image = function Image(props) {
  var $element = void 0;
  var $img = void 0;
  var imageUrl = props.imageUrl,
      onUpdate = props.onUpdate,
      onLoad = props.onLoad,
      onFail = props.onFail;


  var getElement = function getElement() {
    if (!$element) {
      render();
    }

    return $element;
  };

  var getImg = function getImg() {
    return $img;
  };

  var render = function render() {
    $element = createNode(template$7({
      cn: cn$7,
      imageUrl: imageUrl
    }));

    $img = $element.querySelector('.' + cn$7.image);

    $img.addEventListener('load', function () {
      return onLoad();
    });
    $img.addEventListener('error', function () {
      if ($img.complete) {
        onFail();
      }
    });
    $img.addEventListener('abort', function () {
      return onFail();
    });
  };

  var updateImageUrl = function updateImageUrl(imageUrl) {
    if ($img.src === imageUrl) {
      // safari do not call onload event when url is the same
      // so we manually clear it before update
      $img.removeAttribute('src');
    }

    $img.src = imageUrl;

    onUpdate();
  };

  return {
    getElement: getElement,
    getImg: getImg,
    updateImageUrl: updateImageUrl
  };
};

var cn$8 = { "range": "uploadcare-tab-effects--range", "range__input": "uploadcare-tab-effects--range__input" };

var template$8 = (function (_) {
  return '<div class="' + _.cn.range + '">\n  <input type="range" class="' + _.cn['range__input'] + '" min="' + _.min + '" max="' + _.max + '" step="' + _.step + '" value="' + _.value + '">\n</div>\n';
});

var Range = function Range(props) {
  var $element = void 0;
  var _props$min = props.min,
      min = _props$min === undefined ? 0 : _props$min,
      _props$max = props.max,
      max = _props$max === undefined ? 100 : _props$max,
      _props$step = props.step,
      step = _props$step === undefined ? 1 : _props$step,
      _props$value = props.value,
      value = _props$value === undefined ? 50 : _props$value,
      onChange = props.onChange;


  var getElement = function getElement() {
    if (!$element) {
      render();
    }

    return $element;
  };

  var render = function render() {
    $element = createNode(template$8({
      cn: cn$8,
      min: min,
      max: max,
      step: step,
      value: value
    }));

    $element.addEventListener('change', function (e) {
      return onChange(e.target.value);
    });
  };

  return { getElement: getElement };
};

var template$9 = (function (_) {
  return "<div></div>\n";
});

var ranges = {
  enhance: [0, 100],
  sharp: [0, 20],
  blur: [0, 100, 5]
};

var Tab = function Tab(props) {
  var $element = void 0;
  var _header = void 0;
  var _content = void 0;
  var _footer = void 0;
  var _image = void 0;
  var _effects = void 0;
  var _crops = void 0;
  var uc = props.uc,
      store = props.store,
      settings = props.settings,
      onDone = props.onDone,
      onFail = props.onFail;

  var state = {
    cropWidget: null,
    currentCrop: 0
  };
  var t = uc.locale.t;
  var CropWidget = uc.crop.CropWidget;
  var previewModifiers = '-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/';

  var getElement = function getElement() {
    if (!$element) {
      render();
    }

    return $element;
  };

  var render = function render() {
    var _store$getState = store.getState(),
        view = _store$getState.view,
        appliedEffects = _store$getState.appliedEffects,
        image = _store$getState.image;

    $element = createNode(template$9());

    _header = new Header({ title: headerTitle(view) });

    _footer = new Footer({
      locale: {
        done: t('dialog.tabs.preview.done'),
        cancel: t('dialog.tabs.preview.image.change')
      },
      onDone: handleDone,
      onCancel: handleCancel
    });

    _content = new Content();

    var imageUrl = image.cdnUrl + previewModifiers;

    if (settings.previewUrlCallback) {
      imageUrl = settings.previewUrlCallback(imageUrl, image);
    }

    _image = new Image({
      imageUrl: imageUrl,
      onUpdate: function onUpdate() {
        return store.setImageLoad('start');
      },
      onLoad: function onLoad() {
        return store.setImageLoad('load');
      },
      onFail: function onFail() {
        return store.setImageLoad('fail');
      }
    });

    $element.appendChild(_header.getElement());
    $element.appendChild(_content.getElement());
    $element.appendChild(_footer.getElement());

    _content.appendChild(_image.getElement());

    var effects = settings.effects;

    var titles = effects.reduce(function (titles, effect) {
      titles[effect] = effectTitle(effect);

      return titles;
    }, {});

    _effects = new Effects({
      effects: effects,
      titles: titles,
      appliedEffects: appliedEffects,
      onEffectClick: handleEffectClick
    });

    _footer.appendChild(_effects.getElement());

    store.subscribeToAppliedEffects(handleAppliedEffectsChange);
    store.subscribeToView(handleViewChange);
    store.subscribeToImage(handleImageChange);
    store.subscribeToImageLoad(handleImageLoadChange);
  };

  var headerTitle = function headerTitle(view) {
    return view === 'preview' ? t('dialog.tabs.preview.image.title') : effectTitle(view);
  };

  var effectTitle = function effectTitle(effect) {
    return t('effects.captions.' + effect);
  };

  var deleteCropWidget = function deleteCropWidget() {
    if (!state.cropWidget || !state.cropWidget.__api) return;

    state.cropWidget.__api.release();
    state.cropWidget.__api.destroy();
    _image.getImg().removeAttribute('style');
  };

  var handleDone = function handleDone(e) {
    var _store$getState2 = store.getState(),
        view = _store$getState2.view;

    if (view === 'preview') {
      onDone();
    } else {
      e.stopPropagation();

      if (view === 'crop') {
        finishCrop();
      }

      store.setView('preview');
    }
  };

  var handleCancel = function handleCancel(e) {
    var _store$getState3 = store.getState(),
        view = _store$getState3.view,
        appliedEffects = _store$getState3.appliedEffects;

    var cropSettings = settings.crop;


    if (view !== 'preview') {
      e.stopPropagation();

      var value = 0;

      if (view === 'crop') {
        var freeAllowed = cropSettings.some(function (c) {
          return !c.preferedSize;
        });

        value = freeAllowed ? null : appliedEffects[view];
        deleteCropWidget();
      }
      store.setAppliedEffect(defineProperty({}, view, value));
      store.setView('preview');
    }
  };

  var handleEffectClick = function handleEffectClick(effect) {
    var _store$getState4 = store.getState(),
        appliedEffects = _store$getState4.appliedEffects;

    if (effect === 'rotate') {
      store.setAppliedEffect({ rotate: getNextRotateValue(appliedEffects.rotate) });

      return;
    }

    if (typeof appliedEffects[effect] === 'boolean') {
      store.setAppliedEffect(defineProperty({}, effect, !appliedEffects[effect]));

      return;
    }

    if (effect === 'crop' || typeof appliedEffects[effect] === 'number') {
      store.setView(effect);
    }
  };

  var handleRangeChange = function handleRangeChange(value) {
    var _store$getState5 = store.getState(),
        view = _store$getState5.view;

    store.setAppliedEffect(defineProperty({}, view, parseInt(value)));
  };

  var handleAppliedEffectsChange = function handleAppliedEffectsChange() {
    store.rebuildImage();

    var _store$getState6 = store.getState(),
        appliedEffects = _store$getState6.appliedEffects;

    _effects.updateApplied(appliedEffects);
  };

  var handleViewChange = function handleViewChange() {
    var _store$getState7 = store.getState(),
        view = _store$getState7.view,
        appliedEffects = _store$getState7.appliedEffects,
        image = _store$getState7.image;

    _header.updateTitle(headerTitle(view));

    if (view === 'preview') {
      _footer.updateDoneTitle();
    } else {
      _footer.updateDoneTitle(t('effects.apply'));
    }

    _footer.empty();

    if (view === 'preview') {
      _footer.appendChild(_effects.getElement());

      return;
    }

    if (view === 'crop') {
      showCrops();

      var imageUrl = image.originalUrl + (getModifiersByEffects([{ crop: null }], false, false) || '') + previewModifiers;

      _image.updateImageUrl(imageUrl);

      return;
    }

    if (ranges[view]) {
      var value = appliedEffects[view];

      if (value === 0) {
        value = ranges[view][1] / 2;

        store.setAppliedEffect(defineProperty({}, view, value));
      }

      var _range = new Range({
        min: ranges[view][0],
        max: ranges[view][1],
        step: ranges[view][2],
        value: value,
        onChange: handleRangeChange
      });

      _footer.appendChild(_range.getElement());
    }
  };

  var handleImageChange = function handleImageChange() {
    var _store$getState8 = store.getState(),
        image = _store$getState8.image;

    var imageUrl = image.cdnUrl + previewModifiers;

    if (settings.previewUrlCallback) {
      imageUrl = settings.previewUrlCallback(imageUrl, image);
    }

    _image.updateImageUrl(imageUrl);
  };

  var handleImageLoadChange = function handleImageLoadChange() {
    var _store$getState9 = store.getState(),
        view = _store$getState9.view,
        imageLoad = _store$getState9.imageLoad;

    switch (imageLoad) {
      case 'start':
        _footer.toggleDisabled(true);

        if (view === 'preview') {
          _effects.toggleDisabled(true);
        }
        if (view === 'crop') {
          _crops.toggleDisabled(true);
        }
        break;
      case 'load':
        _footer.toggleDisabled(false);

        if (view === 'preview') {
          _effects.toggleDisabled(false);
        } else if (view === 'crop') {
          startCrop();
          _crops.toggleDisabled(false);
        }
        break;
      case 'fail':
        onFail();
        break;
    }
  };

  var showCrops = function showCrops() {
    var cropSettings = settings.crop;

    var _store$getState10 = store.getState(),
        appliedEffects = _store$getState10.appliedEffects;

    var crop = appliedEffects.crop;


    state.currentCrop = crop && crop.index !== undefined ? crop.index : 0;

    _crops = new Crops({
      crops: cropSettings.map(function (c, i) {
        var _getCropSizeInfo = getCropSizeInfo(c),
            description = _getCropSizeInfo.description,
            width = _getCropSizeInfo.width,
            height = _getCropSizeInfo.height;

        return {
          index: i,
          settings: c,
          title: description,
          size: {
            width: width,
            height: height
          }
        };
      }),
      currentCrop: state.currentCrop,
      onCropClick: function onCropClick(crop) {
        state.currentCrop = crop.index;
        if (state.cropWidget) {
          state.cropWidget.setCrop(crop.settings);
        }
      }
    });

    _footer.appendChild(_crops.getElement());
  };

  var startCrop = function startCrop() {
    var cropSettings = settings.crop;

    var _store$getState11 = store.getState(),
        appliedEffects = _store$getState11.appliedEffects,
        image = _store$getState11.image;

    var crop = appliedEffects.crop;
    var _image$originalImageI = image.originalImageInfo,
        width = _image$originalImageI.width,
        height = _image$originalImageI.height;

    var size = [width, height];

    state.cropWidget = new CropWidget(uc.jQuery(_image.getImg()), size, cropSettings[state.currentCrop]);

    if (crop && crop.coords) {
      state.cropWidget.setSelection(crop.coords);
    }
  };

  var finishCrop = function finishCrop() {
    var _state$cropWidget = state.cropWidget,
        crop = _state$cropWidget.crop,
        originalSize = _state$cropWidget.originalSize;

    var coords = state.cropWidget.getSelection();

    deleteCropWidget();

    store.setAppliedEffect({
      crop: {
        originalSize: originalSize,
        coords: coords,
        settings: crop,
        index: state.currentCrop
      }
    });
  };

  var getCropSizeInfo = function getCropSizeInfo(crop) {
    var preferedSize = crop.preferedSize;


    var description = t('dialog.tabs.preview.crop.free');
    var width = void 0;
    var height = void 0;

    if (preferedSize) {
      var gcd = uc.utils.gcd(preferedSize[0], preferedSize[1]);
      var size = uc.utils.fitSize(preferedSize, [30, 30], true);

      description = preferedSize[0] / gcd + ':' + preferedSize[1] / gcd;
      width = Math.max(20, size[0]) + 'px';
      height = Math.max(12, size[1]) + 'px';
    }

    return {
      description: description,
      width: width,
      height: height
    };
  };

  return { getElement: getElement };
};

function createPreviewTabEffects(PreviewTab, uc) {
  customExtends(PreviewTabEffects, PreviewTab);

  function PreviewTabEffects(container, button, dialogApi, settings, name) {
    PreviewTabEffects.__super__.constructor.call(this, container, button, dialogApi, settings, name);
  }

  PreviewTabEffects.prototype.__setState = function (state, data) {
    var _this = this;

    if (state === 'image') {
      if (data.info) {
        var globalEffects = getGlobalSettingsByKey('effects');

        // Trying to get effects settings from global if widget doesn't have them
        if (typeof this.settings.effects === 'undefined' && globalEffects) {
          this.settings.effects = globalEffects;
        }

        var settings = configureSettings(this.settings);
        var store = configureStore(data.info, settings);
        var onDone = function onDone() {
          var newFile = _this.file.then(function (info) {
            var _store$getState$image = store.getState().image,
                cdnUrl = _store$getState$image.cdnUrl,
                cdnUrlModifiers = _store$getState$image.cdnUrlModifiers;


            return _extends({}, info, {
              cdnUrl: cdnUrl,
              cdnUrlModifiers: cdnUrlModifiers
            });
          });

          _this.dialogApi.fileColl.replace(_this.file, newFile);
        };
        var onFail = function onFail() {
          _this.file = null;
          _this.__setState('error', { error: 'loadImage' });
        };

        autoCrop(store, settings, uc);

        uc.locale.translations = configureTranslations(uc.locale.translations);
        uc.locale.rebuild();

        var tab = new Tab({
          uc: uc,
          store: store,
          settings: settings,
          onDone: onDone,
          onFail: onFail
        });

        var container = this.container[0];

        container.innerHTML = '';
        Array.prototype.slice.call(tab.getElement().children).forEach(function (child) {
          return container.appendChild(child);
        });

        store.setImageLoad('start');
      }
    } else {
      PreviewTabEffects.__super__.__setState.call(this, state, data);
    }
  };

  PreviewTabEffects.prototype.initImage = function () {};

  return PreviewTabEffects;
}

function uploadcareTabEffects(container, button, dialogApi, settings, name) {
  uploadcare.plugin(function (uc) {
    if (settings.multiple) {
      return new uc.widget.tabs.PreviewTabMultiple(container, button, dialogApi, settings, name);
    }

    var PreviewTabEffects = createPreviewTabEffects(uc.widget.tabs.PreviewTab, uc);

    return new PreviewTabEffects(container, button, dialogApi, settings, name);
  });
}

return uploadcareTabEffects;

})));
//# sourceMappingURL=uploadcare.tab-effects.js.map