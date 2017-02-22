/*! markdown-it-emoji 1.2.0 https://github.com//markdown-it/markdown-it-emoji @license MIT */(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.markdownitEmoji = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "100": "💯",
  "1234": "🔢",
  "smile": "😄",
  "smiley": "😃",
  "grinning": "😀",
  "blush": "😊",
  "relaxed": "☺️",
  "wink": "😉",
  "heart_eyes": "😍",
  "kissing_heart": "😘",
  "kissing_closed_eyes": "😚",
  "kissing": "😗",
  "kissing_smiling_eyes": "😙",
  "stuck_out_tongue_winking_eye": "😜",
  "stuck_out_tongue_closed_eyes": "😝",
  "stuck_out_tongue": "😛",
  "flushed": "😳",
  "grin": "😁",
  "pensive": "😔",
  "relieved": "😌",
  "unamused": "😒",
  "disappointed": "😞",
  "persevere": "😣",
  "cry": "😢",
  "joy": "😂",
  "sob": "😭",
  "sleepy": "😪",
  "disappointed_relieved": "😥",
  "cold_sweat": "😰",
  "sweat_smile": "😅",
  "sweat": "😓",
  "weary": "😩",
  "tired_face": "😫",
  "fearful": "😨",
  "scream": "😱",
  "angry": "😠",
  "rage": "😡",
  "triumph": "😤",
  "confounded": "😖",
  "laughing": "😆",
  "satisfied": "😆",
  "yum": "😋",
  "mask": "😷",
  "sunglasses": "😎",
  "sleeping": "😴",
  "dizzy_face": "😵",
  "astonished": "😲",
  "worried": "😟",
  "frowning": "😦",
  "anguished": "😧",
  "smiling_imp": "😈",
  "imp": "👿",
  "open_mouth": "😮",
  "grimacing": "😬",
  "neutral_face": "😐",
  "confused": "😕",
  "hushed": "😯",
  "no_mouth": "😶",
  "innocent": "😇",
  "smirk": "😏",
  "expressionless": "😑",
  "man_with_gua_pi_mao": "👲",
  "man_with_turban": "👳",
  "cop": "👮",
  "construction_worker": "👷",
  "guardsman": "💂",
  "baby": "👶",
  "boy": "👦",
  "girl": "👧",
  "man": "👨",
  "woman": "👩",
  "older_man": "👴",
  "older_woman": "👵",
  "person_with_blond_hair": "👱",
  "angel": "👼",
  "princess": "👸",
  "smiley_cat": "😺",
  "smile_cat": "😸",
  "heart_eyes_cat": "😻",
  "kissing_cat": "😽",
  "smirk_cat": "😼",
  "scream_cat": "🙀",
  "crying_cat_face": "😿",
  "joy_cat": "😹",
  "pouting_cat": "😾",
  "japanese_ogre": "👹",
  "japanese_goblin": "👺",
  "see_no_evil": "🙈",
  "hear_no_evil": "🙉",
  "speak_no_evil": "🙊",
  "skull": "💀",
  "alien": "👽",
  "hankey": "💩",
  "poop": "💩",
  "shit": "💩",
  "fire": "🔥",
  "sparkles": "✨",
  "star2": "🌟",
  "dizzy": "💫",
  "boom": "💥",
  "collision": "💥",
  "anger": "💢",
  "sweat_drops": "💦",
  "droplet": "💧",
  "zzz": "💤",
  "dash": "💨",
  "ear": "👂",
  "eyes": "👀",
  "nose": "👃",
  "tongue": "👅",
  "lips": "👄",
  "+1": "👍",
  "thumbsup": "👍",
  "-1": "👎",
  "thumbsdown": "👎",
  "ok_hand": "👌",
  "facepunch": "👊",
  "punch": "👊",
  "fist": "✊",
  "v": "✌️",
  "wave": "👋",
  "hand": "✋",
  "raised_hand": "✋",
  "open_hands": "👐",
  "point_up_2": "👆",
  "point_down": "👇",
  "point_right": "👉",
  "point_left": "👈",
  "raised_hands": "🙌",
  "pray": "🙏",
  "point_up": "☝️",
  "clap": "👏",
  "muscle": "💪",
  "walking": "🚶",
  "runner": "🏃",
  "running": "🏃",
  "dancer": "💃",
  "couple": "👫",
  "family": "👪",
  "two_men_holding_hands": "👬",
  "two_women_holding_hands": "👭",
  "couplekiss": "💏",
  "couple_with_heart": "💑",
  "dancers": "👯",
  "ok_woman": "🙆",
  "no_good": "🙅",
  "information_desk_person": "💁",
  "raising_hand": "🙋",
  "massage": "💆",
  "haircut": "💇",
  "nail_care": "💅",
  "bride_with_veil": "👰",
  "person_with_pouting_face": "🙎",
  "person_frowning": "🙍",
  "bow": "🙇",
  "tophat": "🎩",
  "crown": "👑",
  "womans_hat": "👒",
  "athletic_shoe": "👟",
  "mans_shoe": "👞",
  "shoe": "👞",
  "sandal": "👡",
  "high_heel": "👠",
  "boot": "👢",
  "shirt": "👕",
  "tshirt": "👕",
  "necktie": "👔",
  "womans_clothes": "👚",
  "dress": "👗",
  "running_shirt_with_sash": "🎽",
  "jeans": "👖",
  "kimono": "👘",
  "bikini": "👙",
  "briefcase": "💼",
  "handbag": "👜",
  "pouch": "👝",
  "purse": "👛",
  "eyeglasses": "👓",
  "ribbon": "🎀",
  "closed_umbrella": "🌂",
  "lipstick": "💄",
  "yellow_heart": "💛",
  "blue_heart": "💙",
  "purple_heart": "💜",
  "green_heart": "💚",
  "heart": "❤️",
  "broken_heart": "💔",
  "heartpulse": "💗",
  "heartbeat": "💓",
  "two_hearts": "💕",
  "sparkling_heart": "💖",
  "revolving_hearts": "💞",
  "cupid": "💘",
  "love_letter": "💌",
  "kiss": "💋",
  "ring": "💍",
  "gem": "💎",
  "bust_in_silhouette": "👤",
  "busts_in_silhouette": "👥",
  "speech_balloon": "💬",
  "footprints": "👣",
  "thought_balloon": "💭",
  "dog": "🐶",
  "wolf": "🐺",
  "cat": "🐱",
  "mouse": "🐭",
  "hamster": "🐹",
  "rabbit": "🐰",
  "frog": "🐸",
  "tiger": "🐯",
  "koala": "🐨",
  "bear": "🐻",
  "pig": "🐷",
  "pig_nose": "🐽",
  "cow": "🐮",
  "boar": "🐗",
  "monkey_face": "🐵",
  "monkey": "🐒",
  "horse": "🐴",
  "sheep": "🐑",
  "elephant": "🐘",
  "panda_face": "🐼",
  "penguin": "🐧",
  "bird": "🐦",
  "baby_chick": "🐤",
  "hatched_chick": "🐥",
  "hatching_chick": "🐣",
  "chicken": "🐔",
  "snake": "🐍",
  "turtle": "🐢",
  "bug": "🐛",
  "bee": "🐝",
  "honeybee": "🐝",
  "ant": "🐜",
  "beetle": "🐞",
  "snail": "🐌",
  "octopus": "🐙",
  "shell": "🐚",
  "tropical_fish": "🐠",
  "fish": "🐟",
  "dolphin": "🐬",
  "flipper": "🐬",
  "whale": "🐳",
  "whale2": "🐋",
  "cow2": "🐄",
  "ram": "🐏",
  "rat": "🐀",
  "water_buffalo": "🐃",
  "tiger2": "🐅",
  "rabbit2": "🐇",
  "dragon": "🐉",
  "racehorse": "🐎",
  "goat": "🐐",
  "rooster": "🐓",
  "dog2": "🐕",
  "pig2": "🐖",
  "mouse2": "🐁",
  "ox": "🐂",
  "dragon_face": "🐲",
  "blowfish": "🐡",
  "crocodile": "🐊",
  "camel": "🐫",
  "dromedary_camel": "🐪",
  "leopard": "🐆",
  "cat2": "🐈",
  "poodle": "🐩",
  "feet": "🐾",
  "paw_prints": "🐾",
  "bouquet": "💐",
  "cherry_blossom": "🌸",
  "tulip": "🌷",
  "four_leaf_clover": "🍀",
  "rose": "🌹",
  "sunflower": "🌻",
  "hibiscus": "🌺",
  "maple_leaf": "🍁",
  "leaves": "🍃",
  "fallen_leaf": "🍂",
  "herb": "🌿",
  "ear_of_rice": "🌾",
  "mushroom": "🍄",
  "cactus": "🌵",
  "palm_tree": "🌴",
  "evergreen_tree": "🌲",
  "deciduous_tree": "🌳",
  "chestnut": "🌰",
  "seedling": "🌱",
  "blossom": "🌼",
  "globe_with_meridians": "🌐",
  "sun_with_face": "🌞",
  "full_moon_with_face": "🌝",
  "new_moon_with_face": "🌚",
  "new_moon": "🌑",
  "waxing_crescent_moon": "🌒",
  "first_quarter_moon": "🌓",
  "moon": "🌔",
  "waxing_gibbous_moon": "🌔",
  "full_moon": "🌕",
  "waning_gibbous_moon": "🌖",
  "last_quarter_moon": "🌗",
  "waning_crescent_moon": "🌘",
  "last_quarter_moon_with_face": "🌜",
  "first_quarter_moon_with_face": "🌛",
  "crescent_moon": "🌙",
  "earth_africa": "🌍",
  "earth_americas": "🌎",
  "earth_asia": "🌏",
  "volcano": "🌋",
  "milky_way": "🌌",
  "stars": "🌠",
  "star": "⭐",
  "sunny": "☀️",
  "partly_sunny": "⛅",
  "cloud": "☁️",
  "zap": "⚡",
  "umbrella": "☔",
  "snowflake": "❄️",
  "snowman": "⛄",
  "cyclone": "🌀",
  "foggy": "🌁",
  "rainbow": "🌈",
  "ocean": "🌊",
  "bamboo": "🎍",
  "gift_heart": "💝",
  "dolls": "🎎",
  "school_satchel": "🎒",
  "mortar_board": "🎓",
  "flags": "🎏",
  "fireworks": "🎆",
  "sparkler": "🎇",
  "wind_chime": "🎐",
  "rice_scene": "🎑",
  "jack_o_lantern": "🎃",
  "ghost": "👻",
  "santa": "🎅",
  "christmas_tree": "🎄",
  "gift": "🎁",
  "tanabata_tree": "🎋",
  "tada": "🎉",
  "confetti_ball": "🎊",
  "balloon": "🎈",
  "crossed_flags": "🎌",
  "crystal_ball": "🔮",
  "movie_camera": "🎥",
  "camera": "📷",
  "video_camera": "📹",
  "vhs": "📼",
  "cd": "💿",
  "dvd": "📀",
  "minidisc": "💽",
  "floppy_disk": "💾",
  "computer": "💻",
  "iphone": "📱",
  "phone": "☎️",
  "telephone": "☎️",
  "telephone_receiver": "📞",
  "pager": "📟",
  "fax": "📠",
  "satellite": "📡",
  "tv": "📺",
  "radio": "📻",
  "loud_sound": "🔊",
  "sound": "🔉",
  "speaker": "🔈",
  "mute": "🔇",
  "bell": "🔔",
  "no_bell": "🔕",
  "loudspeaker": "📢",
  "mega": "📣",
  "hourglass_flowing_sand": "⏳",
  "hourglass": "⌛",
  "alarm_clock": "⏰",
  "watch": "⌚",
  "unlock": "🔓",
  "lock": "🔒",
  "lock_with_ink_pen": "🔏",
  "closed_lock_with_key": "🔐",
  "key": "🔑",
  "mag_right": "🔎",
  "bulb": "💡",
  "flashlight": "🔦",
  "high_brightness": "🔆",
  "low_brightness": "🔅",
  "electric_plug": "🔌",
  "battery": "🔋",
  "mag": "🔍",
  "bathtub": "🛁",
  "bath": "🛀",
  "shower": "🚿",
  "toilet": "🚽",
  "wrench": "🔧",
  "nut_and_bolt": "🔩",
  "hammer": "🔨",
  "door": "🚪",
  "smoking": "🚬",
  "bomb": "💣",
  "gun": "🔫",
  "hocho": "🔪",
  "knife": "🔪",
  "pill": "💊",
  "syringe": "💉",
  "moneybag": "💰",
  "yen": "💴",
  "dollar": "💵",
  "pound": "💷",
  "euro": "💶",
  "credit_card": "💳",
  "money_with_wings": "💸",
  "calling": "📲",
  "e-mail": "📧",
  "inbox_tray": "📥",
  "outbox_tray": "📤",
  "email": "✉️",
  "envelope": "✉️",
  "envelope_with_arrow": "📩",
  "incoming_envelope": "📨",
  "postal_horn": "📯",
  "mailbox": "📫",
  "mailbox_closed": "📪",
  "mailbox_with_mail": "📬",
  "mailbox_with_no_mail": "📭",
  "postbox": "📮",
  "package": "📦",
  "memo": "📝",
  "pencil": "📝",
  "page_facing_up": "📄",
  "page_with_curl": "📃",
  "bookmark_tabs": "📑",
  "bar_chart": "📊",
  "chart_with_upwards_trend": "📈",
  "chart_with_downwards_trend": "📉",
  "scroll": "📜",
  "clipboard": "📋",
  "date": "📅",
  "calendar": "📆",
  "card_index": "📇",
  "file_folder": "📁",
  "open_file_folder": "📂",
  "scissors": "✂️",
  "pushpin": "📌",
  "paperclip": "📎",
  "black_nib": "✒️",
  "pencil2": "✏️",
  "straight_ruler": "📏",
  "triangular_ruler": "📐",
  "closed_book": "📕",
  "green_book": "📗",
  "blue_book": "📘",
  "orange_book": "📙",
  "notebook": "📓",
  "notebook_with_decorative_cover": "📔",
  "ledger": "📒",
  "books": "📚",
  "book": "📖",
  "open_book": "📖",
  "bookmark": "🔖",
  "name_badge": "📛",
  "microscope": "🔬",
  "telescope": "🔭",
  "newspaper": "📰",
  "art": "🎨",
  "clapper": "🎬",
  "microphone": "🎤",
  "headphones": "🎧",
  "musical_score": "🎼",
  "musical_note": "🎵",
  "notes": "🎶",
  "musical_keyboard": "🎹",
  "violin": "🎻",
  "trumpet": "🎺",
  "saxophone": "🎷",
  "guitar": "🎸",
  "space_invader": "👾",
  "video_game": "🎮",
  "black_joker": "🃏",
  "flower_playing_cards": "🎴",
  "mahjong": "🀄",
  "game_die": "🎲",
  "dart": "🎯",
  "football": "🏈",
  "basketball": "🏀",
  "soccer": "⚽",
  "baseball": "⚾️",
  "tennis": "🎾",
  "8ball": "🎱",
  "rugby_football": "🏉",
  "bowling": "🎳",
  "golf": "⛳",
  "mountain_bicyclist": "🚵",
  "bicyclist": "🚴",
  "checkered_flag": "🏁",
  "horse_racing": "🏇",
  "trophy": "🏆",
  "ski": "🎿",
  "snowboarder": "🏂",
  "swimmer": "🏊",
  "surfer": "🏄",
  "fishing_pole_and_fish": "🎣",
  "coffee": "☕",
  "tea": "🍵",
  "sake": "🍶",
  "baby_bottle": "🍼",
  "beer": "🍺",
  "beers": "🍻",
  "cocktail": "🍸",
  "tropical_drink": "🍹",
  "wine_glass": "🍷",
  "fork_and_knife": "🍴",
  "pizza": "🍕",
  "hamburger": "🍔",
  "fries": "🍟",
  "poultry_leg": "🍗",
  "meat_on_bone": "🍖",
  "spaghetti": "🍝",
  "curry": "🍛",
  "fried_shrimp": "🍤",
  "bento": "🍱",
  "sushi": "🍣",
  "fish_cake": "🍥",
  "rice_ball": "🍙",
  "rice_cracker": "🍘",
  "rice": "🍚",
  "ramen": "🍜",
  "stew": "🍲",
  "oden": "🍢",
  "dango": "🍡",
  "egg": "🍳",
  "bread": "🍞",
  "doughnut": "🍩",
  "custard": "🍮",
  "icecream": "🍦",
  "ice_cream": "🍨",
  "shaved_ice": "🍧",
  "birthday": "🎂",
  "cake": "🍰",
  "cookie": "🍪",
  "chocolate_bar": "🍫",
  "candy": "🍬",
  "lollipop": "🍭",
  "honey_pot": "🍯",
  "apple": "🍎",
  "green_apple": "🍏",
  "tangerine": "🍊",
  "lemon": "🍋",
  "cherries": "🍒",
  "grapes": "🍇",
  "watermelon": "🍉",
  "strawberry": "🍓",
  "peach": "🍑",
  "melon": "🍈",
  "banana": "🍌",
  "pear": "🍐",
  "pineapple": "🍍",
  "sweet_potato": "🍠",
  "eggplant": "🍆",
  "tomato": "🍅",
  "corn": "🌽",
  "house": "🏠",
  "house_with_garden": "🏡",
  "school": "🏫",
  "office": "🏢",
  "post_office": "🏣",
  "hospital": "🏥",
  "bank": "🏦",
  "convenience_store": "🏪",
  "love_hotel": "🏩",
  "hotel": "🏨",
  "wedding": "💒",
  "church": "⛪",
  "department_store": "🏬",
  "european_post_office": "🏤",
  "city_sunrise": "🌇",
  "city_sunset": "🌆",
  "japanese_castle": "🏯",
  "european_castle": "🏰",
  "tent": "⛺",
  "factory": "🏭",
  "tokyo_tower": "🗼",
  "japan": "🗾",
  "mount_fuji": "🗻",
  "sunrise_over_mountains": "🌄",
  "sunrise": "🌅",
  "night_with_stars": "🌃",
  "statue_of_liberty": "🗽",
  "bridge_at_night": "🌉",
  "carousel_horse": "🎠",
  "ferris_wheel": "🎡",
  "fountain": "⛲",
  "roller_coaster": "🎢",
  "ship": "🚢",
  "boat": "⛵",
  "sailboat": "⛵",
  "speedboat": "🚤",
  "rowboat": "🚣",
  "anchor": "⚓",
  "rocket": "🚀",
  "airplane": "✈️",
  "seat": "💺",
  "helicopter": "🚁",
  "steam_locomotive": "🚂",
  "tram": "🚊",
  "station": "🚉",
  "mountain_railway": "🚞",
  "train2": "🚆",
  "bullettrain_side": "🚄",
  "bullettrain_front": "🚅",
  "light_rail": "🚈",
  "metro": "🚇",
  "monorail": "🚝",
  "train": "🚋",
  "railway_car": "🚃",
  "trolleybus": "🚎",
  "bus": "🚌",
  "oncoming_bus": "🚍",
  "blue_car": "🚙",
  "oncoming_automobile": "🚘",
  "car": "🚗",
  "red_car": "🚗",
  "taxi": "🚕",
  "oncoming_taxi": "🚖",
  "articulated_lorry": "🚛",
  "truck": "🚚",
  "rotating_light": "🚨",
  "police_car": "🚓",
  "oncoming_police_car": "🚔",
  "fire_engine": "🚒",
  "ambulance": "🚑",
  "minibus": "🚐",
  "bike": "🚲",
  "aerial_tramway": "🚡",
  "suspension_railway": "🚟",
  "mountain_cableway": "🚠",
  "tractor": "🚜",
  "barber": "💈",
  "busstop": "🚏",
  "ticket": "🎫",
  "vertical_traffic_light": "🚦",
  "traffic_light": "🚥",
  "warning": "⚠️",
  "construction": "🚧",
  "beginner": "🔰",
  "fuelpump": "⛽",
  "izakaya_lantern": "🏮",
  "lantern": "🏮",
  "slot_machine": "🎰",
  "hotsprings": "♨️",
  "moyai": "🗿",
  "circus_tent": "🎪",
  "performing_arts": "🎭",
  "round_pushpin": "📍",
  "triangular_flag_on_post": "🚩",
  "jp": "🇯🇵",
  "kr": "🇰🇷",
  "de": "🇩🇪",
  "cn": "🇨🇳",
  "us": "🇺🇸",
  "fr": "🇫🇷",
  "es": "🇪🇸",
  "it": "🇮🇹",
  "ru": "🇷🇺",
  "gb": "🇬🇧",
  "uk": "🇬🇧",
  "one": "1️⃣",
  "two": "2️⃣",
  "three": "3️⃣",
  "four": "4️⃣",
  "five": "5️⃣",
  "six": "6️⃣",
  "seven": "7️⃣",
  "eight": "8️⃣",
  "nine": "9️⃣",
  "zero": "0️⃣",
  "keycap_ten": "🔟",
  "hash": "#️⃣",
  "symbols": "🔣",
  "arrow_up": "⬆️",
  "arrow_down": "⬇️",
  "arrow_left": "⬅️",
  "arrow_right": "➡️",
  "capital_abcd": "🔠",
  "abcd": "🔡",
  "abc": "🔤",
  "arrow_upper_right": "↗️",
  "arrow_upper_left": "↖️",
  "arrow_lower_right": "↘️",
  "arrow_lower_left": "↙️",
  "left_right_arrow": "↔️",
  "arrow_up_down": "↕️",
  "arrows_counterclockwise": "🔄",
  "arrow_backward": "◀️",
  "arrow_forward": "▶️",
  "arrow_up_small": "🔼",
  "arrow_down_small": "🔽",
  "leftwards_arrow_with_hook": "↩️",
  "arrow_right_hook": "↪️",
  "information_source": "ℹ️",
  "rewind": "⏪",
  "fast_forward": "⏩",
  "arrow_double_up": "⏫",
  "arrow_double_down": "⏬",
  "arrow_heading_down": "⤵️",
  "arrow_heading_up": "⤴️",
  "ok": "🆗",
  "twisted_rightwards_arrows": "🔀",
  "repeat": "🔁",
  "repeat_one": "🔂",
  "new": "🆕",
  "up": "🆙",
  "cool": "🆒",
  "free": "🆓",
  "ng": "🆖",
  "signal_strength": "📶",
  "cinema": "🎦",
  "koko": "🈁",
  "u6307": "🈯",
  "u7a7a": "🈳",
  "u6e80": "🈵",
  "u5408": "🈴",
  "u7981": "🈲",
  "ideograph_advantage": "🉐",
  "u5272": "🈹",
  "u55b6": "🈺",
  "u6709": "🈶",
  "u7121": "🈚",
  "restroom": "🚻",
  "mens": "🚹",
  "womens": "🚺",
  "baby_symbol": "🚼",
  "wc": "🚾",
  "potable_water": "🚰",
  "put_litter_in_its_place": "🚮",
  "parking": "🅿️",
  "wheelchair": "♿",
  "no_smoking": "🚭",
  "u6708": "🈷️",
  "u7533": "🈸",
  "sa": "🈂️",
  "m": "Ⓜ️",
  "passport_control": "🛂",
  "baggage_claim": "🛄",
  "left_luggage": "🛅",
  "customs": "🛃",
  "accept": "🉑",
  "secret": "㊙️",
  "congratulations": "㊗️",
  "cl": "🆑",
  "sos": "🆘",
  "id": "🆔",
  "no_entry_sign": "🚫",
  "underage": "🔞",
  "no_mobile_phones": "📵",
  "do_not_litter": "🚯",
  "non-potable_water": "🚱",
  "no_bicycles": "🚳",
  "no_pedestrians": "🚷",
  "children_crossing": "🚸",
  "no_entry": "⛔",
  "eight_spoked_asterisk": "✳️",
  "sparkle": "❇️",
  "negative_squared_cross_mark": "❎",
  "white_check_mark": "✅",
  "eight_pointed_black_star": "✴️",
  "heart_decoration": "💟",
  "vs": "🆚",
  "vibration_mode": "📳",
  "mobile_phone_off": "📴",
  "a": "🅰️",
  "b": "🅱️",
  "ab": "🆎",
  "o2": "🅾️",
  "diamond_shape_with_a_dot_inside": "💠",
  "loop": "➿",
  "recycle": "♻️",
  "aries": "♈",
  "taurus": "♉",
  "gemini": "♊",
  "cancer": "♋",
  "leo": "♌",
  "virgo": "♍",
  "libra": "♎",
  "scorpius": "♏",
  "sagittarius": "♐",
  "capricorn": "♑",
  "aquarius": "♒",
  "pisces": "♓",
  "ophiuchus": "⛎",
  "six_pointed_star": "🔯",
  "atm": "🏧",
  "chart": "💹",
  "heavy_dollar_sign": "💲",
  "currency_exchange": "💱",
  "copyright": "©️",
  "registered": "®️",
  "tm": "™️",
  "x": "❌",
  "bangbang": "‼️",
  "interrobang": "⁉️",
  "exclamation": "❗",
  "heavy_exclamation_mark": "❗",
  "question": "❓",
  "grey_exclamation": "❕",
  "grey_question": "❔",
  "o": "⭕",
  "top": "🔝",
  "end": "🔚",
  "back": "🔙",
  "on": "🔛",
  "soon": "🔜",
  "arrows_clockwise": "🔃",
  "clock12": "🕛",
  "clock1230": "🕧",
  "clock1": "🕐",
  "clock130": "🕜",
  "clock2": "🕑",
  "clock230": "🕝",
  "clock3": "🕒",
  "clock330": "🕞",
  "clock4": "🕓",
  "clock430": "🕟",
  "clock5": "🕔",
  "clock530": "🕠",
  "clock6": "🕕",
  "clock7": "🕖",
  "clock8": "🕗",
  "clock9": "🕘",
  "clock10": "🕙",
  "clock11": "🕚",
  "clock630": "🕡",
  "clock730": "🕢",
  "clock830": "🕣",
  "clock930": "🕤",
  "clock1030": "🕥",
  "clock1130": "🕦",
  "heavy_multiplication_x": "✖️",
  "heavy_plus_sign": "➕",
  "heavy_minus_sign": "➖",
  "heavy_division_sign": "➗",
  "spades": "♠️",
  "hearts": "♥️",
  "clubs": "♣️",
  "diamonds": "♦️",
  "white_flower": "💮",
  "heavy_check_mark": "✔️",
  "ballot_box_with_check": "☑️",
  "radio_button": "🔘",
  "link": "🔗",
  "curly_loop": "➰",
  "wavy_dash": "〰️",
  "part_alternation_mark": "〽️",
  "trident": "🔱",
  "black_medium_square": "◼️",
  "white_medium_square": "◻️",
  "black_medium_small_square": "◾",
  "white_medium_small_square": "◽",
  "black_small_square": "▪️",
  "white_small_square": "▫️",
  "small_red_triangle": "🔺",
  "black_square_button": "🔲",
  "white_square_button": "🔳",
  "black_circle": "⚫",
  "white_circle": "⚪",
  "red_circle": "🔴",
  "large_blue_circle": "🔵",
  "small_red_triangle_down": "🔻",
  "white_large_square": "⬜",
  "black_large_square": "⬛",
  "large_orange_diamond": "🔶",
  "large_blue_diamond": "🔷",
  "small_orange_diamond": "🔸",
  "small_blue_diamond": "🔹"
}
},{}],2:[function(require,module,exports){
// Emoticons -> Emoji mapping.
//
// (!) Some patterns skipped, to avoid collisions
// without increase matcher complicity. Than can change in future.
//
// Places to look for more emoticons info:
//
// - http://en.wikipedia.org/wiki/List_of_emoticons#Western
// - https://github.com/wooorm/emoticon/blob/master/Support.md
// - http://factoryjoe.com/projects/emoticons/
//
'use strict';

module.exports = {
  angry:            [ '>:(', '>:-(' ],
  blush:            [ ':")', ':-")' ],
  broken_heart:     [ '</3', '<\\3' ],
  // :\ and :-\ not used because of conflict with markdown escaping
  confused:         [ ':/', ':-/' ], // twemoji shows question
  cry:              [ ":'(", ":'-(", ':,(', ':,-(' ],
  frowning:         [ ':(', ':-(' ],
  heart:            [ '<3' ],
  imp:              [ ']:(', ']:-(' ],
  innocent:         [ 'o:)', 'O:)', 'o:-)', 'O:-)', '0:)', '0:-)' ],
  joy:              [ ":')", ":'-)", ':,)', ':,-)', ":'D", ":'-D", ':,D', ':,-D' ],
  kissing:          [ ':*', ':-*' ],
  laughing:         [ 'x-)', 'X-)' ],
  neutral_face:     [ ':|', ':-|' ],
  open_mouth:       [ ':o', ':-o', ':O', ':-O' ],
  rage:             [ ':@', ':-@' ],
  smile:            [ ':D', ':-D' ],
  smiley:           [ ':)', ':-)' ],
  smiling_imp:      [ ']:)', ']:-)' ],
  sob:              [ ":,'(", ":,'-(", ';(', ';-(' ],
  stuck_out_tongue: [ ':P', ':-P' ],
  sunglasses:       [ '8-)', 'B-)' ],
  sweat:            [ ',:(', ',:-(' ],
  sweat_smile:      [ ',:)', ',:-)' ],
  unamused:         [ ':s', ':-S', ':z', ':-Z', ':$', ':-$' ],
  wink:             [ ';)', ';-)' ]
};

},{}],3:[function(require,module,exports){
// Convert input options to more useable format
// and compile search regexp

'use strict';


function quoteRE(str) {
  return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
}


module.exports = function normalize_opts(options) {
  var emojies = options.defs,
      shortcuts;

  // Filter emojies by whitelist, if needed
  if (options.enabled.length) {
    emojies = Object.keys(emojies).reduce(function (acc, key) {
      if (options.enabled.indexOf(key) >= 0) {
        acc[key] = emojies[key];
      }
      return acc;
    }, {});
  }

  // Flatten shortcuts to simple object: { alias: emoji_name }
  shortcuts = Object.keys(options.shortcuts).reduce(function (acc, key) {
    // Skip aliases for filtered emojies, to reduce regexp
    if (!emojies[key]) { return acc; }

    if (Array.isArray(options.shortcuts[key])) {
      options.shortcuts[key].forEach(function (alias) {
        acc[alias] = key;
      });
      return acc;
    }

    acc[options.shortcuts[key]] = key;
    return acc;
  }, {});

  // Compile regexp
  var names = Object.keys(emojies)
                .map(function (name) { return ':' + name + ':'; })
                .concat(Object.keys(shortcuts))
                .sort()
                .reverse()
                .map(function (name) { return quoteRE(name); })
                .join('|');
  var scanRE = RegExp(names);
  var replaceRE = RegExp(names, 'g');

  return {
    defs: emojies,
    shortcuts: shortcuts,
    scanRE: scanRE,
    replaceRE: replaceRE
  };
};

},{}],4:[function(require,module,exports){
'use strict';

module.exports = function emoji_html(tokens, idx /*, options, env */) {
  return tokens[idx].content;
};

},{}],5:[function(require,module,exports){
// Emojies & shortcuts replacement logic.
//
// Note: In theory, it could be faster to parse :smile: in inline chain and
// leave only shortcuts here. But, who care...
//

'use strict';


module.exports = function create_rule(md, emojies, shortcuts, scanRE, replaceRE) {
  var arrayReplaceAt = md.utils.arrayReplaceAt,
      ucm = md.utils.lib.ucmicro,
      ZPCc = new RegExp([ ucm.Z.source, ucm.P.source, ucm.Cc.source ].join('|'));

  function splitTextToken(text, level, Token) {
    var token, last_pos = 0, nodes = [];

    text.replace(replaceRE, function (match, offset, src) {
      var emoji_name;
      // Validate emoji name
      if (shortcuts.hasOwnProperty(match)) {
        // replace shortcut with full name
        emoji_name = shortcuts[match];

        // Don't allow letters before any shortcut (as in no ":/" in http://)
        if (offset > 0 && !ZPCc.test(src[offset - 1])) {
          return;
        }

        // Don't allow letters after any shortcut
        if (offset + match.length < src.length && !ZPCc.test(src[offset + match.length])) {
          return;
        }
      } else {
        emoji_name = match.slice(1, -1);
      }

      // Add new tokens to pending list
      if (offset > last_pos) {
        token         = new Token('text', '', 0);
        token.content = text.slice(last_pos, offset);
        nodes.push(token);
      }

      token         = new Token('emoji', '', 0);
      token.markup  = emoji_name;
      token.content = emojies[emoji_name];
      nodes.push(token);

      last_pos = offset + match.length;
    });

    if (last_pos < text.length) {
      token         = new Token('text', '', 0);
      token.content = text.slice(last_pos);
      nodes.push(token);
    }

    return nodes;
  }

  return function emoji_replace(state) {
    var i, j, l, tokens, token,
        blockTokens = state.tokens,
        autolinkLevel = 0;

    for (j = 0, l = blockTokens.length; j < l; j++) {
      if (blockTokens[j].type !== 'inline') { continue; }
      tokens = blockTokens[j].children;

      // We scan from the end, to keep position when new tags added.
      // Use reversed logic in links start/end match
      for (i = tokens.length - 1; i >= 0; i--) {
        token = tokens[i];

        if (token.type === 'link_open' || token.type === 'link_close') {
          if (token.info === 'auto') { autolinkLevel -= token.nesting; }
        }

        if (token.type === 'text' && scanRE.test(token.content) && autolinkLevel === 0) {
          // replace current node
          blockTokens[j].children = tokens = arrayReplaceAt(
            tokens, i, splitTextToken(token.content, token.level, state.Token)
          );
        }
      }
    }
  };
};

},{}],6:[function(require,module,exports){
'use strict';


var emojies_defs      = require('./lib/data/full.json');
var emojies_shortcuts = require('./lib/data/shortcuts');
var emoji_html        = require('./lib/render');
var emoji_replace     = require('./lib/replace');
var normalize_opts    = require('./lib/normalize_opts');


module.exports = function emoji_plugin(md, options) {
  var defaults = {
    defs: emojies_defs,
    shortcuts: emojies_shortcuts,
    enabled: []
  };

  var opts = normalize_opts(md.utils.assign({}, defaults, options || {}));

  md.renderer.rules.emoji = emoji_html;

  md.core.ruler.push('emoji', emoji_replace(md, opts.defs, opts.shortcuts, opts.scanRE, opts.replaceRE));
};

},{"./lib/data/full.json":1,"./lib/data/shortcuts":2,"./lib/normalize_opts":3,"./lib/render":4,"./lib/replace":5}]},{},[6])(6)
});