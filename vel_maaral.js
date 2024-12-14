var vel_vaguppu_txt = [
  "பருத்தமுலை சிறுத்தஇடை வெளுத்தநகை கறுத்தகுழல்<br>சிவத்த இதழ் மறச்சிறுமி விழிக்குநிகர் ஆகும்",
  "திருத்தணியில் உதித்தருளும் ஒருத்தன்மலை விருத்தன்என<br>துளத்தில்உறை கருத்தன்மயில் நடத்துகுஹன் வேலே",
  "சொலற்கரிய திருப்புகழை உரைத்தவரை அடுத்தபகை<br>அறுத்தெறிய உறுக்கிஎழு மறத்தைநிலை காணும்",
  "தருக்கிநமன் முருக்கவரின் எருக்குமதி தரித்தமுடி<br>படைத்தவிறல் படைத்தஇறை கழற்குநிகர் ஆகும்",
  "பனைக்கைமுக படக்கரட மதத்தவள கஜக்கடவுள்<br>பதத்திடுநி களத்துமுளை தெறிக்கவரம் ஆகும்",
  "சினத்தவுணர் எதிர்த்தரண களத்தில்வெகு குறைத்தலைகள்<br>சிரித்தெயிறு கடித்துவிழி விழித்தலற மோதும்",
  "துதிக்கும்அடி யவர்க்கொருவர் கெடுக்கஇடர் நினைக்கின் அவர்<br>குலத்தைமுதல் அறக்களையும் எனக்கோர்துணை ஆகும்",
  "தலத்தில்உள கணத்தொகுதி களிப்பின்உண வழைப்பதென<br>மலர்க்கமல கரத்தின்முனை விதிர்க்கவளை வாகும்",
  "பழுத்த முது தமிழ்ப்பலகை இருக்கும்ஒரு கவிப்புலவன்<br>இசைக்குருகி வரைக்குஹையை இடித்துவழி காணும்",
  "திசைக்கிரியை முதற்குலிசன் அறுத்தசிறை முளைத்ததென<br>முகட்டின் இடை பறக்கஅற விசைத்ததிர ஓடும்",
  "சுடர்ப்பரிதி ஒளிப்பநில வொழுக்குமதி ஒளிப்ப அலை<br>அடக்குதழல் ஒளிப்பஒளிர் ஒளிப்பிரபை வீசும்",
  "தனித்துவழி நடக்கும்என திடத்தும்ஒரு வலத்தும்இரு<br>புறத்தும்அரு கடுத்திரவு பகற்றுணைய தாகும்",
  "பசித்தலகை முசித்தழுது முறைப்படுதல் ஒழித்தவுணர்<br>உரத்துதிர நிணத்தசைகள் புசிக்கஅருள் நேரும்",
  "திரைக்கடலை உடைத்துநிறை புனற்கடிது குடித்துடையும்<br>உடைப்படைய அடைத்துதிரம் நிறைத்துவிளை யாடும்",
  "ஸுரர்க்கு(ம்)முநி வரர்க்கு(ம்)மக பதிக்கும்விதி தனக்கும்அரி<br>தனக்கும்நரர் தமக்கும்உறும் இடுக்கண்வினை சாடும்",
  "சலத்துவரும் அரக்கர்உடல் கொழுத்துவளர் பெருத்தகுடர்<br>சிவத்ததொடை எனச்சிகையில் விருப்பமொடு சூடும்"
];
var vel_vaguppu_aud = [
  "audio/01_VelMaaral.mp3",
  "audio/02_VelMaaral.mp3",
  "audio/03_VelMaaral.mp3",
  "audio/04_VelMaaral.mp3",
  "audio/05_VelMaaral.mp3",
  "audio/06_VelMaaral.mp3",
  "audio/07_VelMaaral.mp3",
  "audio/08_VelMaaral.mp3",
  "audio/09_VelMaaral.mp3",
  "audio/10_VelMaaral.mp3",
  "audio/11_VelMaaral.mp3",
  "audio/12_VelMaaral.mp3",
  "audio/13_VelMaaral.mp3",
  "audio/14_VelMaaral.mp3",
  "audio/15_VelMaaral.mp3",
  "audio/16_VelMaaral.mp3"
];
var vel_maaral = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  14, 15, 12, 13, 10, 11, 8, 9, 6, 7, 4, 5, 2, 3, 0, 1,
  3, 2, 1, 0, 7, 6, 5, 4, 11, 10, 9, 8, 15, 14, 13, 12,
  13, 12, 15, 14, 9, 8, 11, 10, 5, 4, 7, 6, 1, 0, 3, 2
];
var thiruthaniyil_index = 1;
var audio_enable = false;
var thiruthani_repeat = 12;
var is_reciting = false;
var is_playing = false;
var verse_order_number = 1;
var audios = [];
const AUDIO_ENABLED_IMG = "images/aud_enabled.png";
const AUDIO_ENABLED_IMG_ALT = "Audio Enabled";
const AUDIO_DISABLED_IMG = "images/aud_disabled.png";
const AUDIO_DISABLED_IMG_ALT = "Audio Disabled";

function fill_thiruthani_content(order_count) {
  let html_content = '';
  let is_first = (order_count == 1);

  for(let count = 0;count < thiruthani_repeat;count++) {
    let thiruthani_content = '<div class="';

    if(order_count % 2 == 0) {
      // Even count
      thiruthani_content += 'even-verse '
    } else {
      // Odd count
      thiruthani_content += 'odd-verse '
    }
    if(order_count == 1) {
      thiruthani_content += 'current-verses center" data-order="' + order_count;
    } else {
      thiruthani_content += 'center" data-order="' + order_count + '" style="display: none;';
    }
    order_count++;

    thiruthani_content += '"><h3 class="verse" data-count="';
    let count_str = ((thiruthaniyil_index + 1) < 10) ? '0' + (thiruthaniyil_index + 1) : (thiruthaniyil_index + 1);
    thiruthani_content += count_str + '">' + (count + 1) + '. ' + vel_vaguppu_txt[thiruthaniyil_index] + '</h3>';
    btn_text = (!is_first && ((count + 1) == thiruthani_repeat)) ? 'முற்றும்' : 'அடுத்து'
    thiruthani_content += '<button class="next-verse btn next-btn">' + btn_text + '</button></div>';
    html_content += thiruthani_content;
  }
  
  return [order_count, html_content];
}

function fill_vm_content() {
  let return_val_arr = fill_thiruthani_content(1);
  let order_count = return_val_arr[0];
  let html_content = return_val_arr[1];

  $.each(vel_maaral, function(count, vm_index) {
    let count_str = ((vm_index + 1) < 10) ? '0' + (vm_index + 1) : (vm_index + 1);
    html_content += '<div class="center" data-order="' + order_count + '" style="display: none;"><h3 class="verse" data-count="' + count_str + '">';
    order_count++;
    html_content += (count + 1) + '. ' + vel_vaguppu_txt[vm_index] + '</h3>';
    html_content += '<h3 class="verse" data-count="';
    count_str = ((thiruthaniyil_index + 1) < 10) ? '0' + (thiruthaniyil_index + 1) : (thiruthaniyil_index + 1);
    html_content += count_str + '">' + vel_vaguppu_txt[thiruthaniyil_index] + '</h3>';
    html_content += '<button class="next-verse btn next-btn">அடுத்து</button></div>';
  });

  html_content += fill_thiruthani_content(order_count)[1];
  
  $('#vel_maaral').html(html_content);
}

function handle_audio_switch() {
  if(is_playing) {
    return;
  }
  
  let audio_image = "";
  let audio_img_alt = "";

  audio_enable = !audio_enable;

  if(audio_enable) {
    audio_image = AUDIO_ENABLED_IMG;
    audio_img_alt = AUDIO_ENABLED_IMG_ALT;
  } else {
    audio_image = AUDIO_DISABLED_IMG;
    audio_img_alt = AUDIO_DISABLED_IMG_ALT;
  }

  $('#audio_switch').html('<img src="' + audio_image + '" alt="' + audio_img_alt + '">');

  if(audio_enable && is_reciting) {
    read_current_verse()
  }
}

function start_recital() {
  $('#start').hide();
  is_reciting = true;
  fill_vm_content();
  $('#vel_maaral').show();
  if(audio_enable) {
    read_current_verse();
  }
}

function move_to_next() {
  $('.current-verses').hide();
  $('.current-verses').removeClass('current-verses');
  verse_order_number++;
  if($('div[data-order="' + verse_order_number + '"]').length == 0) {
    show_end();
    return;
  }
  $('div[data-order="' + verse_order_number + '"]').addClass('current-verses');
  $('div[data-order="' + verse_order_number + '"]').show();

  if(audio_enable) {
    read_current_verse();
  } else if(is_playing) {
    $.each(audios, function(index, audio) {
      audio.pause();
      audio.currentTime = 0;
    });
  }
}

function show_end() {
  $('#vel_maaral').hide();
  $('#end').show();
}

function restart_chant() {
  $('#end').hide();
  $('#vel_maaral').show();
  verse_order_number = 0;
  move_to_next();
}

function toggle_next_button() {
  $('.current-verses button.next-verse').prop('disabled', is_playing);
  if(is_playing) {
    $('#audio_switch img').hide();
  } else {
    $('#audio_switch img').show();
  }
}

function read_current_verse() {
  audios = [];
  $('.current-verses .verse').each(function(i, obj) {
    audios.push(new Audio("audio/" + $(obj).data('count') + "_VelMaaral.mp3"));
  });
  is_playing = true;
  toggle_next_button();
  audios[0].play();
  audios[0].addEventListener("ended", function() {
    is_playing = false;
    toggle_next_button();

    if(audios.length == 1 || !audio_enable) {
      return;
    }
    is_playing = true;
    toggle_next_button();
    audios[1].play();
    audios[1].addEventListener("ended", function() {
      is_playing = false;
      toggle_next_button();
    })
  });
}

$(document).ready(function() {
  $('#vel_maaral').hide();
  $('#end').hide();

  $(document).on('click', '#audio_switch', function() {
    handle_audio_switch();
  });

  $(document).on('change', '#thiruthani_repeat', function() {
    thiruthani_repeat = parseInt(this.value);
  });

  $(document).on('click', '#start_recital', function() {
    start_recital();
  });

  $(document).on('click', '.next-verse', function() {
    move_to_next();
  });

  $(document).on('click', '#refresh', function() {
    restart_chant();
  });
});
