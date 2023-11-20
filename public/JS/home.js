const audioGlobal = document.querySelector('#audio-global');
let indexAudio = 0;
let indexAudioId = "";
let indexAudioGender = "";
let indexMyPlaylistId = "";
let indexMyPlaylistAudioId = "";

let screenWidth = 0;
let screenHeight = 0;

let initialDevice = "";
let emptyPlaylist = false;
let titlePlaylist = "";

const audioControllerPrev = document.querySelector('#audio-prev');
const audioControllerPlay = document.querySelector('#audio-play');
const audioControllerNext = document.querySelector('#audio-next');

const coverCurrentVideo = document.querySelector('.cover-current-video img');
const titleCurrentVideo = document.querySelector('.title-info-current-video');
const genderCurrentVideo = document.querySelector('.gender-info-current-video');
const currentCover = document.querySelector('.current-cover img');
const backgroundCover = document.querySelector('.main-display .background-cover');

const videoAnimationStatus = document.querySelector('.video-animation-status');

const containerPlaylist = document.querySelector('.container-playlist');
const body = document.body;

const currentDuration = document.querySelector('.container-duration-status .current-duration');
const sliderVideoDuration = document.querySelector('.slider-video-duration .slider-video-duration-wrapper input');
const sliderVideoDurationDot = document.querySelector('.slider-video-duration-wrapper .slider-video-duration-dot');
const totalDuration = document.querySelector('.container-duration-status .total-duration');

const sliderVideoVolume = document.querySelector('.slider-video-volume .slider-video-volume-wrapper input');
const sliderVideoVolumeDot = document.querySelector('.slider-video-volume-wrapper .slider-video-volume-dot');

const repeatIcon = document.querySelector('.container-funcions .repeat-icon ion-icon')
const shuffleIcon = document.querySelector('.container-funcions .shuffle-icon ion-icon')

const searchButton = document.querySelector('.container-search .search-icon');

const containerItemsSearch = document.querySelector('.container-items')
const searchBarInput = document.querySelector('#search-bar-input');

const userSettings = document.querySelector('.user-settings');

const containerItemsFavorite = document.querySelector('.container-favorite');
const containerItemsHistoric = document.querySelector('.container-historic');

const userName = document.querySelector('.user-name');
const registrationDate = document.querySelector('.registration-date');

const containerFrameVideo = document.querySelector(".container-frame");

const logout = document.querySelector(".logout");

const videoFavoriteIcon = document.querySelector(".current-video-add-favorite-container")
const videoAddIcon = document.querySelector(".current-video-add ion-icon")
const videoAddIconMobile = document.querySelector(".current-video-add-mobile ion-icon")

const clearHistoricIcon = document.querySelector(".trash-icon")

const morePlaylist = document.querySelector(".more-playlist");
const selectPlaylist = document.querySelector('#selectPlaylist');
const selectPlaylistMobile = document.querySelector('#selectPlaylistMobile');
const selectManagementSystem = document.querySelector('#selectManagementSystem');
const selectManagementSystemMobile = document.querySelector('#selectManagementSystemMobile');
const selectFavorites = document.querySelector('#selectFavorites');
const selectFavoritesMobile = document.querySelector('#selectFavoritesMobile');
const backMenu = document.querySelector('#backMenu');
const backMenuMobile = document.querySelector('#backMenuMobile');
const backPlaylist = document.querySelector(".select-playlist-back");

const containerPlaylistSelect = document.querySelector('.container-select-playlists');

const containerPlaylistMobile = document.querySelector('.container-playlist-mobile')

const coverCurrentVideoMobile = document.querySelector('.main-controls-mobile .box-wrapper .cover-item img');
const titleCurrentVideoMobile = document.querySelector('.main-controls-mobile .box-wrapper .info-item .title-info');
const genderCurrentVideoMobile = document.querySelector('.main-controls-mobile .box-wrapper .info-item .gender-info');
const titleCurrentVideoDisplayMobile = document.querySelector('.main-display-mobile .info-current-video-mobile .title-info-current-video-mobile');
const genderCurrentVideoDisplayMobile = document.querySelector('.main-display-mobile .info-current-video-mobile .gender-info-current-video-mobile');

const controlsMobile = document.querySelector('.main-controls-mobile');
const displayMobile = document.querySelector('.main-display-mobile');
const backgroundCoverMobile = document.querySelector('.main-display-mobile .background-cover-mobile');
const backDisplayMobile = document.querySelector(".main-display-mobile .display-back")
const currentCoverMobile = document.querySelector('.main-display-mobile .current-cover-mobile img');
const containerFrameVideoMobile = document.querySelector(".container-frame-mobile");

const audioControllerPrevMobile = document.querySelector('#audio-prev-mobile');
const audioControllerPlayMobile = document.querySelector('#audio-play-mobile');
const audioControllerNextMobile = document.querySelector('#audio-next-mobile');

const repeatIconMobile = document.querySelector('.main-display-mobile .repeat-icon-mobile ion-icon')
const shuffleIconMobile = document.querySelector('.main-display-mobile .shuffle-icon-mobile ion-icon')

const sliderVideoDurationMobile = document.querySelector('.slider-video-duration-mobile .slider-video-duration-wrapper-mobile input');
const sliderVideoDurationDotMobile = document.querySelector('.slider-video-duration-mobile .slider-video-duration-wrapper-mobile .slider-video-duration-dot-mobile');

const currentDurationMobile = document.querySelector('.main-display-mobile .current-duration-mobile');
const totalDurationMobile = document.querySelector('.main-display-mobile .total-duration-mobile');

const morePlaylistMobile = document.querySelector(".more-playlist-mobile");
const backPlaylistMobile = document.querySelector(".select-playlist-back-mobile");

const containerPlaylistSelectMobile = document.querySelector('.container-select-playlists-mobile');

const displayVideoDurationMobile = document.querySelector(".main-controls-mobile .display-video-duration-mobile")

const userNameMobile = document.querySelector('.user-name-mobile');
const registrationDateMobile = document.querySelector('.registration-date-mobile');

const containerItemsFavoriteMobile = document.querySelector('.container-favorite-mobile');
const containerItemsHistoricMobile = document.querySelector('.container-historic-mobile');

const videoFavoriteIconMobile = document.querySelector(".current-video-add-favorite-container-mobile")

const logoutMobile = document.querySelector(".logout-mobile");

const clearHistoricIconMobile = document.querySelector(".content-profile-mobile .title-2-wrapper-mobile .trash-icon-mobile")

const containerItemsSearchMobile = document.querySelector('.container-search-mobile')

const searchBarInputMobile = document.querySelector('#search-bar-input-mobile');

const btnDeleteAccount = document.querySelector('#btnDeleteAccount');
const btnDeleteAccountMobile = document.querySelector('#btnDeleteAccountMobile');
const formDeleteAccount = document.querySelector('#formDeleteAccount');
const formDeleteAccountMobile = document.querySelector('#formDeleteAccountMobile');
const formDeleteAccountCancel = document.querySelector('#formDeleteAccountCancel');
const formDeleteAccountCancelMobile = document.querySelector('#formDeleteAccountCancelMobile');
const deleteAccountInputToConfirm = document.querySelector('#deleteAccountInputToConfirm');
const deleteAccountInputToConfirmMobile = document.querySelector('#deleteAccountInputToConfirmMobile');
const warning = document.querySelector('#warning');
const warningMobile = document.querySelector('#warningMobile');

const profilePictureEdit = document.querySelector('#profilePictureEdit');
const layerProfilePicture = document.querySelector('#layerProfilePicture');
const profilePictureInput = document.querySelector('#profilePictureInput');
const profilePictureEditMobile = document.querySelector('#profilePictureEditMobile');
const layerProfilePictureMobile = document.querySelector('#layerProfilePictureMobile');
const profilePictureInputMobile = document.querySelector('#profilePictureInputMobile');

const backMyPlaylist = document.querySelector('.minhas-playlists-back');
const backMyPlaylistMobile = document.querySelector('.minhas-playlists-back-mobile');
const backContainerMinhaPlaylist = document.querySelector('.container-minha-playlist-back');
const backContainerMinhaPlaylistMobile = document.querySelector('.container-minha-playlist-back-mobile');
const selectMyPlaylist = document.querySelector('#selectMyPlaylist');
const selectMyPlaylistMobile = document.querySelector('#selectMyPlaylistMobile');

const containerMinhaPlaylist = document.querySelector('#containerMinhaPlaylist');
const btnSelectMyPlaylist = document.querySelector('#btnSelectMyPlaylist');
const btnSelectMyPlaylistMobile = document.querySelector('#btnSelectMyPlaylistMobile');
const btnEditSelectMyPlaylist = document.querySelector('#btnEditSelectMyPlaylist');
const btnEditSelectMyPlaylistMobile = document.querySelector('#btnEditSelectMyPlaylistMobile');
const btnDeleteSelectMyPlaylist = document.querySelector('#btnDeleteSelectMyPlaylist');
const btnDeleteSelectMyPlaylistMobile = document.querySelector('#btnDeleteSelectMyPlaylistMobile');

let allVideoData = []
let videoData = [];
let videoDataShuffled = [];
let videoDataFiltered = [];

let userData;

let playlistData = [];


let audioControllerPlayToggle = true;

audioControllerPlay.addEventListener("click", audioControllerPlayFunction)
audioControllerNext.addEventListener("click", audioControllerNextFunction)
audioControllerPrev.addEventListener("click", audioControllerPrevFunction)

audioControllerPlayMobile.addEventListener("click", audioControllerPlayFunction)
audioControllerNextMobile.addEventListener("click", audioControllerNextFunction)
audioControllerPrevMobile.addEventListener("click", audioControllerPrevFunction)

window.addEventListener("resize", allFunctionResizing);

let canKeyboardEvents = true;
let canKeyboardEventsProfile = true;
document.addEventListener("keyup", function(event){
    if(canKeyboardEvents){
        switch(event.key){
            case " ":
                if(!videoDataShuffled[indexAudio].isVideo){
                    audioControllerPlayFunction();
                }
                break;
            case "ArrowRight":
                audioControllerNextFunction();
                break;
            case "ArrowLeft":
                audioControllerPrevFunction()
                break;
            }
        }
    if(canKeyboardEventsProfile && event.key == "p"){
        toggleTemplateUser();
    }
})

logout.addEventListener("click", toggleLogout);
logoutMobile.addEventListener("click", toggleLogout);
clearHistoricIcon.addEventListener("click", manageHistoricClear);
clearHistoricIconMobile.addEventListener("click", manageHistoricClear);
videoFavoriteIcon.addEventListener("click", manageFavorite);
videoFavoriteIconMobile.addEventListener("click", manageFavorite);
selectPlaylist.addEventListener("click", () => {
    toggleMenu()
    toggleMorePlaylists()
});
selectPlaylistMobile.addEventListener("click", () => {
    toggleMenu()
    toggleMorePlaylists()
});
selectFavorites.addEventListener('click' , () => {
    toggleMenu()
    selectNewPlaylist("Favorite", "Vídeos Favoritos")
})
selectFavoritesMobile.addEventListener('click' , () => {
    toggleMenu()
    selectNewPlaylist("Favorite", "Vídeos Favoritos")
})
selectMyPlaylist.addEventListener("click", () => {
    canKeyboardEventsProfile = false;
    toggleMenu()
    toggleMyPlaylists()
});
selectMyPlaylistMobile.addEventListener("click", () => {
    toggleMenu()
    toggleMyPlaylists()
});


morePlaylist.addEventListener("click", toggleMenu);
backMenu.addEventListener("click", toggleMenu);
backMenuMobile.addEventListener("click", toggleMenu);
backPlaylist.addEventListener("click", toggleMorePlaylists);
backDisplayMobile.addEventListener("click", toggleDisplayMobile)
morePlaylistMobile.addEventListener("click", toggleMenu);
backPlaylistMobile.addEventListener("click", toggleMorePlaylists);
backMyPlaylist.addEventListener("click", () => {
    canKeyboardEventsProfile = true;
    toggleMyPlaylists()
});
backMyPlaylistMobile.addEventListener("click", toggleMyPlaylists)
backContainerMinhaPlaylist.addEventListener("click", toggleContainerMinhaPlaylist);
backContainerMinhaPlaylistMobile.addEventListener("click", toggleContainerMinhaPlaylist);
controlsMobile.addEventListener("click", () => {
    toggleDisplayMobile()
    $(".menu-options-mobile").hide(200)
})
btnDeleteAccount.addEventListener("click", () => {
    formDeleteAccount.classList.remove("hidden")
    canKeyboardEvents = false;
    canKeyboardEventsProfile = false;
})
btnDeleteAccountMobile.addEventListener("click", () => {
    formDeleteAccountMobile.classList.remove("hidden")
})
formDeleteAccountCancel.addEventListener("click", () => {
    formDeleteAccount.classList.add("hidden")
    deleteAccountInputToConfirm.value = ""
    canKeyboardEventsProfile = true;
})
formDeleteAccountCancelMobile.addEventListener("click", () => {
    formDeleteAccountMobile.classList.add("hidden")
    deleteAccountInputToConfirmMobile.value = ""
})
formDeleteAccount.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'form-delete-account-overflow') {
        formDeleteAccount.classList.add("hidden")
        deleteAccountInputToConfirm.value = ""
        canKeyboardEventsProfile = true;
    }
})
formDeleteAccountMobile.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'form-delete-account-overflow-mobile') {
        formDeleteAccountMobile.classList.add("hidden")
        deleteAccountInputToConfirmMobile.value = ""
    }
})
deleteAccountInputToConfirm.addEventListener("paste", (e) => {
    e.preventDefault()
})
deleteAccountInputToConfirmMobile.addEventListener("paste", (e) => {
    e.preventDefault()
})
document.querySelector('.form-delete-account').addEventListener("submit", (e) => {
    e.preventDefault()
    manageUserAccountDeletion()
})
document.querySelector('.form-delete-account-mobile').addEventListener("submit", (e) => {
    e.preventDefault()
    manageUserAccountDeletion()
})

profilePictureEdit.addEventListener("click", () => {
  layerProfilePicture.classList.remove("hidden")
  canKeyboardEvents = false;
  canKeyboardEventsProfile = false;
})
layerProfilePicture.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'layer-profile-picture') {
        layerProfilePicture.classList.add("hidden")
        profilePictureInput.value = userData.profilePicture
        canKeyboardEventsProfile = true;
    }
})
profilePictureEditMobile.addEventListener("click", () => {
    layerProfilePictureMobile.classList.remove("hidden")
})
layerProfilePictureMobile.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'layer-profile-picture-mobile') {
        layerProfilePictureMobile.classList.add("hidden")
        profilePictureInputMobile.value = userData.profilePicture
    }
})
document.querySelector('.container-profile-picture').addEventListener("submit", (e) => {
    e.preventDefault()
    manageUserProfilePicture()
})
document.querySelector('.container-profile-picture-mobile').addEventListener("submit", (e) => {
    e.preventDefault()
    manageUserProfilePicture()
})
btnSelectMyPlaylist.addEventListener("click", () => {
    canKeyboardEventsProfile = true;
    toggleContainerMinhaPlaylist()
    toggleMyPlaylists()
    selectUserMyPlaylist()
})
btnSelectMyPlaylistMobile.addEventListener("click", () => {
    toggleContainerMinhaPlaylist()
    toggleMyPlaylists()
    selectUserMyPlaylist()
})
btnEditSelectMyPlaylist.addEventListener("click", toggleEditMinhaPlaylist)
btnEditSelectMyPlaylistMobile.addEventListener("click", toggleEditMinhaPlaylist)
btnDeleteSelectMyPlaylist.addEventListener("click", toggleDeleteMinhaPlaylist)
btnDeleteSelectMyPlaylistMobile.addEventListener("click", toggleDeleteMinhaPlaylist)

document.querySelector('.add-my-new-playlist-overflow').addEventListener('click', (event) => {
    if (event.target.classList.contains('add-my-new-playlist-overflow')) {
        event.target.classList.add('hidden');
        canKeyboardEvents = true;
    }
});
document.querySelector('.add-my-new-playlist-overflow-mobile').addEventListener('click', (event) => {
    if (event.target.classList.contains('add-my-new-playlist-overflow-mobile')) {
        event.target.classList.add('hidden');
    }
});
document.querySelector('.edit-my-new-playlist-overflow').addEventListener('click', (event) => {
    if (event.target.classList.contains('edit-my-new-playlist-overflow')) {
        event.target.classList.add('hidden');
        canKeyboardEvents = true;
    }
});
document.querySelector('.edit-my-new-playlist-overflow-mobile').addEventListener('click', (event) => {
    if (event.target.classList.contains('edit-my-new-playlist-overflow-mobile')) {
        event.target.classList.add('hidden');
    }
});
document.querySelector('.delete-my-new-playlist-overflow').addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-my-new-playlist-overflow')) {
        event.target.classList.add('hidden');
        canKeyboardEvents = true;
    }
});
document.querySelector('.delete-my-new-playlist-overflow-mobile').addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-my-new-playlist-overflow-mobile')) {
        event.target.classList.add('hidden');
    }
});
document.querySelector('.delete-my-new-playlist-btn-cancel').addEventListener('click', (event) => {
    canKeyboardEvents = true;
    event.target.parentElement.parentElement.parentElement.classList.add('hidden');
});
document.querySelector('.delete-my-new-playlist-btn-cancel-mobile').addEventListener('click', (event) => {
    event.target.parentElement.parentElement.parentElement.classList.add('hidden');
});
document.querySelector('.video-my-new-playlist-overflow').addEventListener('click', (event) => {
    if (event.target.classList.contains('video-my-new-playlist-overflow')) {
        event.target.classList.add('hidden');
    }
});
document.querySelector('.video-my-new-playlist-overflow-mobile').addEventListener('click', (event) => {
    if (event.target.classList.contains('video-my-new-playlist-overflow-mobile')) {
        event.target.classList.add('hidden');
    }
});
document.querySelector('.video-my-new-playlist-delete-btn').addEventListener('click', () => {
    document.querySelector('.video-delete-my-new-playlist-overflow').classList.remove('hidden');
});
document.querySelector('.video-my-new-playlist-delete-btn-mobile').addEventListener('click', () => {
    document.querySelector('.video-delete-my-new-playlist-overflow-mobile').classList.remove('hidden');
});
document.querySelector('.video-delete-my-new-playlist-overflow').addEventListener('click', (event) => {
    if (event.target.classList.contains('video-delete-my-new-playlist-overflow')) {
        event.target.classList.add('hidden');
    }
});
document.querySelector('.video-delete-my-new-playlist-overflow-mobile').addEventListener('click', (event) => {
    if (event.target.classList.contains('video-delete-my-new-playlist-overflow-mobile')) {
        event.target.classList.add('hidden');
    }
});
document.querySelector('.video-delete-my-new-playlist-btn-cancel').addEventListener('click', (event) => {
    if (event.target.classList.contains('video-delete-my-new-playlist-btn-cancel')) {
        event.target.parentElement.parentElement.parentElement.classList.add('hidden');
    }
});
document.querySelector('.video-delete-my-new-playlist-btn-cancel-mobile').addEventListener('click', (event) => {
    if (event.target.classList.contains('video-delete-my-new-playlist-btn-cancel-mobile')) {
        event.target.parentElement.parentElement.parentElement.classList.add('hidden');
    }
});
videoAddIcon.addEventListener("click", toggleAddOptions)
videoAddIconMobile.addEventListener("click", toggleAddOptions)
document.querySelector('.current-video-add-overflow').addEventListener('click', (event) => {
    if (event.target.classList.contains('current-video-add-overflow')) {
        event.target.classList.add('hidden');
        canKeyboardEventsProfile = true;
    }
});
document.querySelector('.current-video-add-overflow-mobile').addEventListener('click', (event) => {
    if (event.target.classList.contains('current-video-add-overflow-mobile')) {
        event.target.classList.add('hidden');
    }
});
document.querySelector('.current-video-add-create-new-playlist').addEventListener('click', toggleAddMinhaPlaylist)
document.querySelector('.current-video-add-create-new-playlist-mobile').addEventListener('click', toggleAddMinhaPlaylist)
document.querySelector('.current-video-add-confirm').addEventListener('click', toggleAddOptions)
document.querySelector('.current-video-add-confirm-mobile').addEventListener('click', toggleAddOptions)
document.querySelector('.add-my-new-playlist-container').addEventListener("submit", (e) => {
    e.preventDefault()
    manageUserCreatePlaylist()
})
document.querySelector('.add-my-new-playlist-container-mobile').addEventListener("submit", (e) => {
    e.preventDefault()
    manageUserCreatePlaylist()
})
document.querySelector('.video-delete-my-new-playlist-btn-delete').addEventListener("click", manageMyPlaylistVideoDeletion)
document.querySelector('.video-delete-my-new-playlist-btn-delete-mobile').addEventListener("click", manageMyPlaylistVideoDeletion)
document.querySelector('.delete-my-new-playlist-container').addEventListener("submit", (e) => {
    e.preventDefault()
    manageMyPlaylistDeletion()
})
document.querySelector('.delete-my-new-playlist-container-mobile').addEventListener("submit", (e) => {
    e.preventDefault()
    manageMyPlaylistDeletion()
})
document.querySelector('.delete-my-new-playlist-overflow .delete-my-new-playlist-container .delete-my-new-playlist-name').addEventListener("paste", (e) => {
    e.preventDefault()
})
document.querySelector('.delete-my-new-playlist-overflow-mobile .delete-my-new-playlist-container-mobile .delete-my-new-playlist-name-mobile').addEventListener("paste", (e) => {
    e.preventDefault()
})
document.querySelector('.edit-my-new-playlist-overflow .edit-my-new-playlist-container').addEventListener("submit", (e) => {
    e.preventDefault()
    manageMyPlaylistEdition()
})
document.querySelector('.edit-my-new-playlist-overflow-mobile .edit-my-new-playlist-container-mobile').addEventListener("submit", (e) => {
    e.preventDefault()
    manageMyPlaylistEdition()
})
document.querySelector('.confirm-logout-overflow').addEventListener('click', (event) => {
    if (event.target.classList.contains('confirm-logout-overflow')) {
        event.target.classList.add('hidden');
        canKeyboardEventsProfile = true;
    }
});
document.querySelector('.confirm-logout-overflow-mobile').addEventListener('click', (event) => {
    if (event.target.classList.contains('confirm-logout-overflow-mobile')) {
        event.target.classList.add('hidden');
    }
});
document.querySelector('.confirm-logout-container').addEventListener("submit", (e) => {
    e.preventDefault()
    logoutService()
})
document.querySelector('.confirm-logout-container-mobile').addEventListener("submit", (e) => {
    e.preventDefault()
    logoutService()
})
document.querySelector('.minhas-playlists-search-bar-close').addEventListener('click', () => {
    document.querySelector('.minhas-playlists-search-bar-input').value = '';
    generatorContainerVideoAddPlaylist()
})
document.querySelector('.minhas-playlists-search-bar-input').addEventListener('input', () => {
    generatorContainerVideoAddPlaylist()
})
document.querySelector('.playlists-search-bar-close').addEventListener('click', () => {
    document.querySelector('.playlists-search-bar-input').value = '';
    generatorContainerPlaylistSelectData()
    generatorContainerPlaylistSelectDataPlay()
})
document.querySelector('.playlists-search-bar-input').addEventListener('input', () => {
    generatorContainerPlaylistSelectData()
    generatorContainerPlaylistSelectDataPlay()
})
document.querySelector('.playlists-search-bar-close-mobile').addEventListener('click', () => {
    document.querySelector('.playlists-search-bar-input-mobile').value = '';
    generatorContainerPlaylistSelectData()
    generatorContainerPlaylistSelectDataPlay()
})
document.querySelector('.playlists-search-bar-input-mobile').addEventListener('input', () => {
    generatorContainerPlaylistSelectData()
    generatorContainerPlaylistSelectDataPlay()
})
document.querySelector('.minhas-playlists-search-bar-close-mobile').addEventListener('click', () => {
    document.querySelector('.minhas-playlists-search-bar-input-mobile').value = '';
    generatorContainerVideoAddPlaylist()
})
document.querySelector('.minhas-playlists-search-bar-input-mobile').addEventListener('input', () => {
    generatorContainerVideoAddPlaylist()
})

document.querySelector('.service-logo').addEventListener("click", () => {
    window.location = '/'
})

function inicia(){
    setScreenWidthAndHeight();
    allVideoValueSetters();
    setUserSettings();
    generatorContainerPlaylistData();
    generatorContainerPlaylistDataPlay();
    generatorContainerPlaylistSelectData();
    generatorContainerPlaylistSelectDataPlay();
    manageEmptyPlaylist();
    setManagementSystem()
    setUserProfilePicture()
    manageHistoric();
    searchEvents();
    generatorContainerCurrentVideoAddPlaylist()
    generatorContainerVideoAddPlaylist()
    if (emptyPlaylist) return
    videoStateControllers();
    durationSliderEventGenerator();
    volumeSliderEventGenerator();
    generatorContainerSearchData()
    generatorContainerSearchDataPlay()
    generatorContainerFavoriteData()
    generatorContainerFavoriteDataPlay()
    generatorContainerHistoricData()
    generatorContainerHistoricDataPlay()

    indexAudioId = videoDataShuffled[indexAudio]._id;
    indexAudioGender = videoDataShuffled[indexAudio].gender;
    $(".title-playlist").html(userData.lastAccessedPlaylistName);
    $(".title-playlist-mobile").html(userData.lastAccessedPlaylistName);
    setVideoPlayTag();
    refreshFavorite();
    audioControllerPlayAudioAndVideo();
    initialDeviceDefinition();
}

function audioControllerPlayFunction(){
    if (screenWidth >= 1360) {
        if(audioControllerPlayToggle){
            audioGlobal.play();
            audioControllerPlayToggle = false;
            audioControllerPlay.name = 'pause-circle';
            videoAnimationStatus.classList.add('run');
        }
        else {
            audioGlobal.pause();
            audioControllerPlayToggle = true;
            audioControllerPlay.name = 'play-circle';
            videoAnimationStatus.classList.remove('run');
        }
    } else {
        if(audioControllerPlayToggle){
            audioGlobal.play();
            audioControllerPlayToggle = false;
            audioControllerPlayMobile.name = 'pause-circle';
        }
        else {
            audioGlobal.pause();
            audioControllerPlayToggle = true;
            audioControllerPlayMobile.name = 'play-circle';
        }
    }
}
function audioControllerPlayFunctionNoPause(){
    if (screenWidth >= 1360) {
        if(videoDataShuffled[indexAudio].isVideo){
            audioGlobal.pause()
            document.querySelector(".container-side-2").style.display = "none"
            videoAnimationStatus.classList.remove('run');

            return;
        }

        audioGlobal.play();
        audioControllerPlayToggle = false;
        audioControllerPlay.name = 'pause-circle';
        videoAnimationStatus.classList.add('run');

        document.querySelector(".container-side-2").style.display = "flex"
    } else {
        if(videoDataShuffled[indexAudio].isVideo){
            audioGlobal.pause()
            document.querySelector(".main-display-mobile").classList.add("video-mode")

            return;
        }

        audioGlobal.play();
        audioControllerPlayToggle = false;
        audioControllerPlayMobile.name = 'pause-circle';
        document.querySelector(".main-display-mobile").classList.remove("video-mode")
    }
}

function allVideoValueSetters(){
    emptyPlaylist = false;
    if(videoData.length <= 0){
        emptyPlaylist = true;
        if(screenWidth >= 1360){
            warning.classList.remove('hidden')
            warning.textContent = 'A PlayList atual não tem conteúdo'
            setTimeout(() => {
                warning.classList.add('hidden')
            }, 3000)
        } else {
            warningMobile.classList.remove('hidden')
            warningMobile.textContent = 'A PlayList atual não tem conteúdo'
            setTimeout(() => {
                warningMobile.classList.add('hidden')
            }, 3000)
        }

        return
    }
    if (screenWidth >= 1360) {
        if(videoDataShuffled[indexAudio].isVideo){
            indexAudioId = videoDataShuffled[indexAudio]._id;
            indexAudioGender = videoDataShuffled[indexAudio].gender;
            coverCurrentVideo.src = videoDataShuffled[indexAudio].coverUrl;
            containerFrameVideo.style.display = "block"
            currentCover.style.display = "none"
            backgroundCover.style.setProperty("background-image", `url("${videoDataShuffled[indexAudio].coverUrl}")`);
            titleCurrentVideo.innerHTML = videoDataShuffled[indexAudio].title;
            genderCurrentVideo.innerHTML = videoDataShuffled[indexAudio].gender;

            containerFrameVideo.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoDataShuffled[indexAudio].audioUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

            videoResizingFunction();

            return;
        }

        audioGlobal.src = videoDataShuffled[indexAudio].audioUrl;
        indexAudioId = videoDataShuffled[indexAudio]._id;
        indexAudioGender = videoDataShuffled[indexAudio].gender;
        coverCurrentVideo.src = videoDataShuffled[indexAudio].coverUrl;
        containerFrameVideo.style.display = "none"
        currentCover.style.display = "block"
        currentCover.src = videoDataShuffled[indexAudio].coverUrl;
        backgroundCover.style.setProperty("background-image", `url("${videoDataShuffled[indexAudio].coverUrl}")`);
        titleCurrentVideo.innerHTML = videoDataShuffled[indexAudio].title;
        genderCurrentVideo.innerHTML = videoDataShuffled[indexAudio].gender;
        containerFrameVideo.innerHTML = "";
    } else {
        if(videoDataShuffled[indexAudio].isVideo){
            indexAudioId = videoDataShuffled[indexAudio]._id;
            indexAudioGender = videoDataShuffled[indexAudio].gender;
            coverCurrentVideoMobile.src = videoDataShuffled[indexAudio].coverUrl;
            containerFrameVideoMobile.style.display = "block"
            currentCoverMobile.style.display = "none"
            backgroundCoverMobile.style.setProperty("background-image", `url("${videoDataShuffled[indexAudio].coverUrl}")`);
            titleCurrentVideoMobile.innerHTML = videoDataShuffled[indexAudio].title;
            genderCurrentVideoMobile.innerHTML = videoDataShuffled[indexAudio].gender;
            titleCurrentVideoDisplayMobile.innerHTML = videoDataShuffled[indexAudio].title;
            genderCurrentVideoDisplayMobile.innerHTML = videoDataShuffled[indexAudio].gender;
            $(displayVideoDurationMobile).hide()

            containerFrameVideoMobile.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoDataShuffled[indexAudio].audioUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

            videoResizingFunction();

            return;
        }

        audioGlobal.src = videoDataShuffled[indexAudio].audioUrl;
        audioGlobal.volume = 1
        indexAudioId = videoDataShuffled[indexAudio]._id;
        indexAudioGender = videoDataShuffled[indexAudio].gender;
        coverCurrentVideoMobile.src = videoDataShuffled[indexAudio].coverUrl;
        containerFrameVideoMobile.style.display = "none"
        currentCoverMobile.style.display = "block"
        currentCoverMobile.src = videoDataShuffled[indexAudio].coverUrl;
        backgroundCoverMobile.style.setProperty("background-image", `url("${videoDataShuffled[indexAudio].coverUrl}")`);
        titleCurrentVideoMobile.innerHTML = videoDataShuffled[indexAudio].title;
        genderCurrentVideoMobile.innerHTML = videoDataShuffled[indexAudio].gender;
        titleCurrentVideoDisplayMobile.innerHTML = videoDataShuffled[indexAudio].title;
        genderCurrentVideoDisplayMobile.innerHTML = videoDataShuffled[indexAudio].gender;
        containerFrameVideoMobile.innerHTML = "";
        $(displayVideoDurationMobile).show()
    }
}

function setUserSettings(){
    let day = parseInt(userData.additionDate.substring(8,10))
    let month = parseInt(userData.additionDate.substring(5,7))
    let year = parseInt(userData.additionDate.substring(0,4))

    switch (month) {
        case 1:
            month = "janeiro";
            break;
        case 2:
            month = "fevereiro";
            break;
        case 3:
            month = "março";
            break;
        case 4:
            month = "abril";
            break;
        case 5:
            month = "maio";
            break;
        case 6:
            month = "junho";
            break;
        case 7:
            month = "julho";
            break;
        case 8:
            month = "agosto";
            break;
        case 9:
            month = "setembro";
            break;
        case 10:
            month = "outubro";
            break;
        case 11:
            month = "novembro";
            break;
        case 12:
            month = "dezembro";
            break;
      }

    if (screenWidth >= 1360) {
        registrationDate.innerHTML = `Registrou-se em: ${day} de ${month} ${year}`;
        userName.innerHTML = userData.name;
    } else {
        registrationDateMobile.innerHTML = `Registrou-se em: ${day} de ${month} ${year}`;
        userNameMobile.innerHTML = userData.name;
    }
}

function audioControllerNextFunction(){
    indexAudio++;
    if(indexAudio >= videoDataShuffled.length){
        indexAudio = 0;
    }
    
    let selectedTheme = videoDataShuffled[indexAudio].theme
    indexAudioId = videoDataShuffled[indexAudio]._id;
    indexAudioGender = videoDataShuffled[indexAudio].gender;
    
    allVideoValueSetters();
    audioControllerPlayFunctionNoPause()
    setVideoPlayTag();
    manageHistoric();
    refreshFavorite();
    generatorContainerCurrentVideoAddPlaylist()
}
function audioControllerPrevFunction(){
    indexAudio--;
    if(indexAudio < 0){
        indexAudio = videoDataShuffled.length - 1;
    }

    let selectedTheme = videoDataShuffled[indexAudio].theme
    indexAudioId = videoDataShuffled[indexAudio]._id;
    indexAudioGender = videoDataShuffled[indexAudio].gender;

    allVideoValueSetters();
    audioControllerPlayFunctionNoPause()
    setVideoPlayTag();
    manageHistoric();
    refreshFavorite();
    generatorContainerCurrentVideoAddPlaylist()
}

function generatorContainerPlaylistData(){
    if (screenWidth >= 1360) {
        videoDataShuffled.forEach((element) => {

            containerPlaylist.innerHTML += `
                <div class="item-playlist" data-id="${element._id}" data-theme="${element.theme}">
                    <div class="box-wrapper">
                        <div class="cover-item">
                            <img src="${element.coverUrl}">
                        </div>
                        <div class="info-item">
                            <div class="title-info">
                                ${element.title}
                            </div>
                            <div class="gender-info">
                                ${element.gender}
                            </div>
                        </div>
                    </div>

                    <div class="play-button-item">
                        <ion-icon name="play-circle"></ion-icon>
                    </div>
                </div>
            `
        })
    } else {
        videoDataShuffled.forEach((element) => {

            containerPlaylistMobile.innerHTML += `
                <div class="item-playlist-mobile" data-id="${element._id}" data-theme="${element.theme}">
                    <div class="box-wrapper">
                        <div class="cover-item">
                            <img src="${element.coverUrl}">
                        </div>
                        <div class="info-item">
                            <div class="title-info">
                                ${element.title}
                            </div>
                            <div class="gender-info">
                                ${element.gender}
                            </div>
                        </div>
                    </div>

                    <div class="play-button-item">
                        <ion-icon name="play-circle"></ion-icon>
                    </div>
                </div>
            `
        })
    }
}

function generatorContainerPlaylistDataPlay(){
    if (screenWidth >= 1360) {
        const itemsPlaylist = document.querySelectorAll('.container-playlist .item-playlist');

        itemsPlaylist.forEach((element)=> {
            element.addEventListener('click', function(){
                let cannotPlayTheVideo = false;
                if (indexAudio == videoDataShuffled.indexOf(videoDataShuffled.find(element => element._id == $(this).data('id')))) {
                    cannotPlayTheVideo = true;
                }

                indexAudio = videoDataShuffled.indexOf(videoDataShuffled.find(element => element._id == $(this).data('id')))
                let selectedTheme = $(this).data('theme')
                indexAudioId = videoDataShuffled[indexAudio]._id;
                indexAudioGender = videoDataShuffled[indexAudio].gender;
                
                if (!cannotPlayTheVideo) {
                    allVideoValueSetters();
                    audioControllerPlayFunctionNoPause();
                    setVideoPlayTag();
                    manageHistoric();
                    refreshFavorite();
                    generatorContainerCurrentVideoAddPlaylist()
                }
            });
        })
    } else {
        const itemsPlaylistMobile = document.querySelectorAll('.container-playlist-mobile .item-playlist-mobile');

        itemsPlaylistMobile.forEach((element)=> {
            element.addEventListener('click', function(){
                let cannotPlayTheVideo = false;
                if (indexAudio == videoDataShuffled.indexOf(videoDataShuffled.find(element => element._id == $(this).data('id')))) {
                    cannotPlayTheVideo = true;
                }

                indexAudio = videoDataShuffled.indexOf(videoDataShuffled.find(element => element._id == $(this).data('id')))
                let selectedTheme = $(this).data('theme')
                indexAudioId = videoDataShuffled[indexAudio]._id;
                indexAudioGender = videoDataShuffled[indexAudio].gender;
                
                toggleDisplayMobile();

                if (!cannotPlayTheVideo) {
                    allVideoValueSetters();
                    audioControllerPlayFunctionNoPause();
                    setVideoPlayTag();
                    manageHistoric();
                    refreshFavorite();
                    generatorContainerCurrentVideoAddPlaylist()
                }
            });
        })
    }
}

function generatorContainerPlaylistSelectData(){
    const playlistDataFiltered = playlistData.filter((playlist) => playlist.title.toLowerCase().includes(document.querySelector('.playlists-search-bar-input').value.trim().toLowerCase()))
    const playlistDataFilteredMobile = playlistData.filter((playlist) => playlist.title.toLowerCase().includes(document.querySelector('.playlists-search-bar-input-mobile').value.trim().toLowerCase()))

    if (screenWidth >= 1360) {
        containerPlaylistSelect.innerHTML = "";

        playlistDataFiltered.forEach((element) => {

            containerPlaylistSelect.innerHTML += `
                <div class="item-select-playlist">
                    <div class="cover-item-select-playlist" data-gender="${element.gender}" data-title="${element.title}">
                        <img src="${element.coverUrl}">
                    </div>
                    <div class="info-item-select-playlist">
                        <div class="title-item-select-playlist">
                            ${element.title}
                        </div>
                        <div class="description-item-select-playlist">
                            ${element.description}
                        </div>
                        <div class="total-video-item-select-playlist">
                            Total de ${element.totalVideos} vídeos
                        </div>
                    </div>
                </div>
            `
        })

        if (containerPlaylistSelect.innerHTML === "") {
            if(document.querySelector('.playlists-search-bar-input').value.trim() !== ""){
                containerPlaylistSelect.innerHTML = `
                    <div class="no-playlist-found">
                        Sua pesquisa não encontrou nenhuma playlist
                    </div>
                `
            } else {
                containerPlaylistSelect.innerHTML = `
                    <div class="no-playlist-found">
                        Nenhuma playlist encontrada
                    </div>
                `
            }
        }
        if (emptyPlaylist) return
    } else {
        containerPlaylistSelectMobile.innerHTML = "";

        playlistDataFilteredMobile.forEach((element) => {

            containerPlaylistSelectMobile.innerHTML += `
                <div class="item-select-playlist-mobile">
                    <div class="cover-item-select-playlist-mobile" data-gender="${element.gender}" data-title="${element.title}">
                        <img src="${element.coverUrl}">
                    </div>
                    <div class="info-item-select-playlist-mobile">
                        <div class="title-item-select-playlist-mobile">
                            ${element.title}
                        </div>
                        <div class="description-item-select-playlist-mobile">
                            ${element.description}
                        </div>
                        <div class="total-video-item-select-playlist-mobile">
                            Total de ${element.totalVideos} vídeos
                        </div>
                    </div>
                </div>
            `
        })

        if (containerPlaylistSelectMobile.innerHTML === "") {
            if(document.querySelector('.playlists-search-bar-input-mobile').value.trim() !== ""){
                containerPlaylistSelectMobile.innerHTML = `
                    <div class="no-playlist-found-mobile">
                        Sua pesquisa não encontrou nenhuma playlist
                    </div>
                `
            } else {
                containerPlaylistSelectMobile.innerHTML = `
                    <div class="no-playlist-found-mobile">
                        Nenhuma playlist encontrada
                    </div>
                `
            }
        }
        if (emptyPlaylist) return
    }
}

function generatorContainerPlaylistSelectDataPlay(){
    if (screenWidth >= 1360) {
        const itemsSelectPlaylist = document.querySelectorAll('.container-select-playlists .item-select-playlist .cover-item-select-playlist');

        itemsSelectPlaylist.forEach((element)=> {
            element.addEventListener('click', function(){
                const playlistValue = $(this).data('gender')
                const playlistName = $(this).data('title')
                toggleMorePlaylists();
                selectNewPlaylist(playlistValue, playlistName);

            });
        })
    } else {
        const itemsSelectPlaylistMobile = document.querySelectorAll('.item-select-playlist-mobile .cover-item-select-playlist-mobile');

        itemsSelectPlaylistMobile.forEach((element)=> {
            element.addEventListener('click', function(){
                const playlistValue = $(this).data('gender')
                const playlistName = $(this).data('title')
                toggleMorePlaylists();
                selectNewPlaylist(playlistValue, playlistName);
            });
        })
    }
}

function generatorContainerSearchData(){
    if (screenWidth >= 1360) {
        videoDataFiltered = videoData.filter(
            (video) =>
            video.title.toLowerCase().includes(searchBarInput.value.toLowerCase())
        )
        
        while (videoDataFiltered.length > 10) {
            videoDataFiltered.pop();
        }

        videoDataFiltered.forEach((element) => {

            containerItemsSearch.innerHTML += `
                <div class="item-playlist-search" data-id="${element._id}" data-theme="${element.theme}">
                    <div class="box-wrapper-search">
                        <div class="cover-item-search">
                            <img src="${element.coverUrl}">
                        </div>
                        <div class="info-item-search">
                            <div class="title-info-search">
                                ${element.title}
                            </div>
                            <div class="gender-info-search">
                                ${element.gender}
                            </div>
                        </div>
                    </div>
                    <div class="play-button-item">
                        <ion-icon name="play-circle"></ion-icon>
                    </div>
                </div>
            `
        })
    } else {
        videoDataFiltered = videoData.filter(
            (video) =>
            video.title.toLowerCase().includes(searchBarInputMobile.value.toLowerCase())
        )
        
        while (videoDataFiltered.length > 10) {
            videoDataFiltered.pop();
        }
        
        videoDataFiltered.forEach((element) => {

            containerItemsSearchMobile.innerHTML += `
                <div class="item-search-mobile" data-id="${element._id}" data-theme="${element.theme}">
                    <div class="box-wrapper-search">
                        <div class="cover-item-search">
                            <img src="${element.coverUrl}"">
                        </div>
                        <div class="info-item-search">
                            <div class="title-info">
                                ${element.title}
                            </div>
                            <div class="gender-info">
                                ${element.gender}
                            </div>
                        </div>
                    </div>
                    <div class="play-button-item">
                        <ion-icon name="play-circle"></ion-icon>
                    </div>
                </div>
            `
        })
    }
}

function generatorContainerSearchDataPlay(){
    if (screenWidth >= 1360) {
        const itemsPlaylistSearch = document.querySelectorAll('.container-items .item-playlist-search');

        itemsPlaylistSearch.forEach((element)=> {
            element.addEventListener('click', function(){
                let cannotPlayTheVideo = false;
                if (indexAudio == videoDataShuffled.indexOf(videoDataShuffled.find(element => element._id == $(this).data('id')))) {
                    cannotPlayTheVideo = true;
                }

                indexAudio = videoDataShuffled.indexOf(videoDataShuffled.find(element => element._id == $(this).data('id')))
                let selectedTheme = $(this).data('theme')
                indexAudioId = videoDataShuffled[indexAudio]._id;
                indexAudioGender = videoDataShuffled[indexAudio].gender;

                if (!cannotPlayTheVideo) {
                    allVideoValueSetters();
                    audioControllerPlayFunctionNoPause();
                    setVideoPlayTag();
                    manageHistoric();
                    refreshFavorite();
                    generatorContainerCurrentVideoAddPlaylist()
                
                    $('.focus-shadow').hide(200);
                    $('.container-search-result').hide(200);
                    profileWasClicked = true;
                    canKeyboardEvents = true;
                    canKeyboardEventsProfile = true;
                }
            });
        })
    } else {
        const itemsPlaylistSearchMobile = document.querySelectorAll('.container-search-mobile .item-search-mobile');

        itemsPlaylistSearchMobile.forEach((element)=> {
            element.addEventListener('click', function(){
                let cannotPlayTheVideo = false;
                if (indexAudio == videoDataShuffled.indexOf(videoDataShuffled.find(element => element._id == $(this).data('id')))) {
                    cannotPlayTheVideo = true;
                }

                indexAudio = videoDataShuffled.indexOf(videoDataShuffled.find(element => element._id == $(this).data('id')))
                let selectedTheme = $(this).data('theme')
                indexAudioId = videoDataShuffled[indexAudio]._id;
                indexAudioGender = videoDataShuffled[indexAudio].gender;

                $('.main-search-mobile').hide(200)
                toggleDisplayMobile()

                if (!cannotPlayTheVideo) {
                    allVideoValueSetters();
                    audioControllerPlayFunctionNoPause();
                    setVideoPlayTag();
                    manageHistoric();
                    refreshFavorite();
                    generatorContainerCurrentVideoAddPlaylist()
                
                    profileWasClicked = true;
                    canKeyboardEvents = true;
                    canKeyboardEventsProfile = true;
                }
            });
        })
    }
}

function generatorContainerFavoriteData(){
    let favoriteVideos = [];

    for (let i = 0; i < userData.favoriteVideos.length; i++) {
        let video = videoDataShuffled.find(element => element._id == userData.favoriteVideos[i].videoId)
        if(video){
            if(!favoriteVideos.find(element => element._id == userData.favoriteVideos[i].videoId)){
                favoriteVideos.push(video);
            }
        }
    }

    favoriteVideos.reverse();

    if (screenWidth >= 1360) {
        favoriteVideos.forEach((element) => {

            containerItemsFavorite.innerHTML += `
                <div class="item-playlist-favorite" data-id="${element._id}" data-theme="${element.theme}">
                    <div class="box-wrapper-favorite">
                        <div class="cover-item-favorite">
                            <img src="${element.coverUrl}">
                        </div>
                        <div class="info-item-favorite">
                            <div class="title-info-favorite">
                                ${element.title}
                            </div>
                            <div class="gender-info-favorite">
                                ${element.gender}
                            </div>
                        </div>
                    </div>
                    <div class="play-button-item">
                        <ion-icon name="play-circle"></ion-icon>
                    </div>
                </div>
            `
        })
    } else {
        favoriteVideos.forEach((element) => {

            containerItemsFavoriteMobile.innerHTML += `
                <div class="item-favorite-mobile" data-id="${element._id}" data-theme="${element.theme}">
                    <div class="box-wrapper-favorite">
                        <div class="cover-item-favorite">
                            <img src="${element.coverUrl}">
                        </div>
                        <div class="info-item-favorite">
                            <div class="title-info">
                                ${element.title}
                            </div>
                            <div class="gender-info">
                                ${element.gender}
                            </div>
                        </div>
                    </div>
                    <div class="play-button-item">
                        <ion-icon name="play-circle"></ion-icon>
                    </div>
                </div>
            `
        })
    }
}

function generatorContainerFavoriteDataPlay(){
    if (screenWidth >= 1360) {
        const itemsPlaylistFavorite = document.querySelectorAll('.container-favorite .item-playlist-favorite');

        itemsPlaylistFavorite.forEach((element)=> {
            element.addEventListener('click', function(){
                let cannotPlayTheVideo = false;
                if (indexAudio == videoDataShuffled.indexOf(videoDataShuffled.find(element => element._id == $(this).data('id')))) {
                    cannotPlayTheVideo = true;
                }

                indexAudio = videoDataShuffled.indexOf(videoDataShuffled.find(element => element._id == $(this).data('id')))
                let selectedTheme = $(this).data('theme')
                indexAudioId = videoDataShuffled[indexAudio]._id;
                indexAudioGender = videoDataShuffled[indexAudio].gender;

                if (!cannotPlayTheVideo) {
                    allVideoValueSetters();
                    audioControllerPlayFunctionNoPause();
                    setVideoPlayTag();
                    manageHistoric();
                    refreshFavorite();
                    generatorContainerCurrentVideoAddPlaylist()
                    
                    $('.focus-shadow').hide(200);
                    $('.container-user-settings').hide(200);
                    profileWasClicked = true;
                    canKeyboardEvents = true;
                    canKeyboardEventsProfile = true;
                }
            });
        })
    } else {
        const itemsPlaylistFavoriteMobile = document.querySelectorAll('.container-favorite-mobile .item-favorite-mobile');

        itemsPlaylistFavoriteMobile.forEach((element)=> {
            element.addEventListener('click', function(){
                let cannotPlayTheVideo = false;
                if (indexAudio == videoDataShuffled.indexOf(videoDataShuffled.find(element => element._id == $(this).data('id')))) {
                    cannotPlayTheVideo = true;
                }

                indexAudio = videoDataShuffled.indexOf(videoDataShuffled.find(element => element._id == $(this).data('id')))
                let selectedTheme = $(this).data('theme')
                indexAudioId = videoDataShuffled[indexAudio]._id;
                indexAudioGender = videoDataShuffled[indexAudio].gender;
                
                $('.main-user-settings-mobile').hide(200);
                toggleDisplayMobile()

                if (!cannotPlayTheVideo) {
                    allVideoValueSetters();
                    audioControllerPlayFunctionNoPause();
                    setVideoPlayTag();
                    manageHistoric();
                    refreshFavorite();
                    generatorContainerCurrentVideoAddPlaylist()
                    
                    profileWasClicked = true;
                    canKeyboardEvents = true;
                    canKeyboardEventsProfile = true;
                }
            });
        })
    }
}


function generatorContainerHistoricData(){
    let historicVideos = [];

    for (let i = 0; i < userData.videoHistory.length; i++) {
        let video = videoDataShuffled.find(element => element._id == userData.videoHistory[i].videoId)

        if(video){
            if(!historicVideos.find(element => element._id == userData.videoHistory[i].videoId)){
                historicVideos.push(video);
            }
        }
    }

    historicVideos.reverse()
    
    if (screenWidth >= 1360) {
        historicVideos.forEach((element) => {

            containerItemsHistoric.innerHTML += `
                <div class="item-playlist-historic" data-id="${element._id}" data-theme="${element.theme}">
                    <div class="box-wrapper-historic">
                        <div class="cover-item-historic">
                            <img src="${element.coverUrl}">
                        </div>
                        <div class="info-item-historic">
                            <div class="title-info-historic">
                                ${element.title}
                            </div>
                            <div class="gender-info-historic">
                                ${element.gender}
                            </div>
                        </div>
                    </div>
                    <div class="play-button-item">
                        <ion-icon name="play-circle"></ion-icon>
                    </div>
                </div>
            `
        })
    } else {
        historicVideos.forEach((element) => {

            containerItemsHistoricMobile.innerHTML += `
                <div class="item-historic-mobile" data-id="${element._id}" data-theme="${element.theme}">
                    <div class="box-wrapper-historic">
                        <div class="cover-item-historic">
                            <img src="${element.coverUrl}">
                        </div>
                        <div class="info-item-historic">
                            <div class="title-info">
                                ${element.title}
                            </div>
                            <div class="gender-info">
                                ${element.gender}
                            </div>
                        </div>
                    </div>
                    <div class="play-button-item">
                        <ion-icon name="play-circle"></ion-icon>
                    </div>
                </div>
            `
        })
    }
}

function generatorContainerHistoricDataPlay(){
    if (screenWidth >= 1360) {
        const itemsPlaylistHistoric = document.querySelectorAll('.container-historic .item-playlist-historic');

        itemsPlaylistHistoric.forEach((element)=> {
            element.addEventListener('click', function(){
                let cannotPlayTheVideo = false;
                if (indexAudio == videoDataShuffled.indexOf(videoDataShuffled.find(element => element._id == $(this).data('id')))) {
                    cannotPlayTheVideo = true;
                }

                indexAudio = videoDataShuffled.indexOf(videoDataShuffled.find(element => element._id == $(this).data('id')))
                let selectedTheme = $(this).data('theme')
                indexAudioId = videoDataShuffled[indexAudio]._id;
                indexAudioGender = videoDataShuffled[indexAudio].gender;

                if (!cannotPlayTheVideo) {
                    allVideoValueSetters();
                    audioControllerPlayFunctionNoPause();
                    setVideoPlayTag();
                    manageHistoric();
                    refreshFavorite();
                    generatorContainerCurrentVideoAddPlaylist()
                    
                    $('.focus-shadow').hide(200);
                    $('.container-user-settings').hide(200);
                    profileWasClicked = true;
                    canKeyboardEvents = true;
                    canKeyboardEventsProfile = true;
                }
            });
        })
    } else {
        const itemsPlaylistHistoricMobile = document.querySelectorAll('.container-historic-mobile .item-historic-mobile');

        itemsPlaylistHistoricMobile.forEach((element)=> {
            element.addEventListener('click', function(){
                let cannotPlayTheVideo = false;
                if (indexAudio == videoDataShuffled.indexOf(videoDataShuffled.find(element => element._id == $(this).data('id')))) {
                    cannotPlayTheVideo = true;
                }

                indexAudio = videoDataShuffled.indexOf(videoDataShuffled.find(element => element._id == $(this).data('id')))
                let selectedTheme = $(this).data('theme')
                indexAudioId = videoDataShuffled[indexAudio]._id;
                indexAudioGender = videoDataShuffled[indexAudio].gender;

                $('.main-user-settings-mobile').hide(200);
                toggleDisplayMobile()

                if (!cannotPlayTheVideo) {
                    allVideoValueSetters();
                    audioControllerPlayFunctionNoPause();
                    setVideoPlayTag();
                    manageHistoric();
                    refreshFavorite();
                    generatorContainerCurrentVideoAddPlaylist()
                    
                    profileWasClicked = true;
                    canKeyboardEvents = true;
                    canKeyboardEventsProfile = true;
                }
            });
        })
    }
}
function generatorContainerVideoAddPlaylist() {
    function converterData(dataString) {
        const meses = [
            "janeiro", "fevereiro", "março", "abril", "maio", "junho",
            "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
        ];
    
        const data = new Date(dataString);
        const dia = data.getDate();
        const mes = meses[data.getMonth()];
        const ano = data.getFullYear();
    
        return `Criada em: ${dia} de ${mes} de ${ano}`;
    }

    if (screenWidth >= 1360) {
        const container = document.querySelector('.container-minhas-playlists');
        const containerVideo = document.querySelector('.container-minhas-videos')

        container.innerHTML = "";

        const myPlaylistsFiltered = userData.myPlaylists.filter(
            (playlist) =>
            playlist.title.toLowerCase().includes(document.querySelector('.minhas-playlists-search-bar-input').value.trim().toLowerCase())
        )
        
        myPlaylistsFiltered.forEach((element) => {
            let divItemMinhasPlaylists = document.createElement("div");
            divItemMinhasPlaylists.classList.add("item-minhas-playlists");
            divItemMinhasPlaylists.addEventListener('click', () => {
                document.querySelector('.main-minhas-playlists .main-playlist .content .title').textContent = element.title;
                document.querySelector('.main-minhas-playlists .main-playlist .content .details .created').textContent = converterData(element.additionDate);
                document.querySelector('.main-minhas-playlists .main-playlist .content .details .total-video').textContent = `Total de ${element.totalVideos} ${element.totalVideos <= 1 ? 'vídeo' : 'vídeos'}`;
                document.querySelector('.main-minhas-playlists .main-playlist .cover img').src = element.currentCoverUrl
                indexMyPlaylistId = element._id;
                document.querySelector('.edit-my-new-playlist-overflow .edit-my-new-playlist-container .edit-my-new-playlist-name').value = element.title;
                document.querySelector('.delete-my-new-playlist-overflow .delete-my-new-playlist-container .delete-my-new-playlist-current').textContent = element.title;
                toggleContainerMinhaPlaylist()

                containerVideo.innerHTML = ""

                element.videos.reverse().forEach((ele) => {
                    let videoaEncontrada = allVideoData.find(element => element._id === ele.videoId)

                    let divItemMinhasVideos = document.createElement("div");
                    divItemMinhasVideos.classList.add("item-minhas-videos");
                    divItemMinhasVideos.addEventListener('click', () => {
                        document.querySelector('.video-my-new-playlist-overflow .video-my-new-playlist-container .video-my-new-playlist-title').textContent = videoaEncontrada.title;
                        document.querySelector('.video-my-new-playlist-overflow .video-my-new-playlist-container .video-my-new-playlist-cover img').src = videoaEncontrada.coverUrl;
                        document.querySelector('.video-delete-my-new-playlist-overflow .video-delete-my-new-playlist-container .video-delete-my-new-playlist-current').textContent = videoaEncontrada.title;
                        indexMyPlaylistAudioId = ele._id;
                        toggleVideoMinhaPlaylist()
                    })

                    let divCoverItemMinhasVideos = document.createElement("div");
                    divCoverItemMinhasVideos.classList.add("cover-item-minhas-videos");

                    let imgCover = document.createElement("img");
                    imgCover.src = videoaEncontrada.coverUrl;

                    let divTitleItemMinhasVideos = document.createElement("div");
                    divTitleItemMinhasVideos.classList.add("title-item-minhas-videos");
                    divTitleItemMinhasVideos.textContent = videoaEncontrada.title;

                    divCoverItemMinhasVideos.appendChild(imgCover);
                    divItemMinhasVideos.appendChild(divCoverItemMinhasVideos);
                    divItemMinhasVideos.appendChild(divTitleItemMinhasVideos);

                    containerVideo.appendChild(divItemMinhasVideos)
                })
            })

            let divCoverItemMinhasPlaylists = document.createElement("div");
            divCoverItemMinhasPlaylists.classList.add("cover-item-minhas-playlists");

            let imgCover = document.createElement("img");
            imgCover.src = element.currentCoverUrl;

            let divTitleItemMinhasPlaylists = document.createElement("div");
            divTitleItemMinhasPlaylists.classList.add("title-item-minhas-playlists");
            divTitleItemMinhasPlaylists.textContent = element.title;

            let divTotalDeVideos = document.createElement("div");
            divTotalDeVideos.classList.add("total-de-videos");
            divTotalDeVideos.textContent = "Total de vídeos";

            let divTotalDeVideosQuantidade = document.createElement("div");
            divTotalDeVideosQuantidade.classList.add("total-de-videos-quantidade");
            divTotalDeVideosQuantidade.textContent = element.totalVideos;

            divCoverItemMinhasPlaylists.appendChild(imgCover);
            divItemMinhasPlaylists.appendChild(divCoverItemMinhasPlaylists);
            divItemMinhasPlaylists.appendChild(divTitleItemMinhasPlaylists);
            divItemMinhasPlaylists.appendChild(divTotalDeVideos);
            divItemMinhasPlaylists.appendChild(divTotalDeVideosQuantidade);

            container.appendChild(divItemMinhasPlaylists);
        })
        if (container.innerHTML === "") {
            if(document.querySelector('.minhas-playlists-search-bar-input').value.trim() !== ""){
                container.innerHTML = `
                <div class="no-playlist">
                    Sua pesquisa não encontrou nenhuma playlist
                </div>
                `
            } else {
                container.innerHTML = `
                <div class="no-playlist">
                    Você não possui nenhuma playlist
                </div>
                `
            }
        }
    } else {
        const container = document.querySelector('.container-minhas-playlists-mobile');
        const containerVideo = document.querySelector('.container-minhas-videos-mobile')

        container.innerHTML = "";

        const myPlaylistsFiltered = userData.myPlaylists.filter(
            (playlist) =>
            playlist.title.toLowerCase().includes(document.querySelector('.minhas-playlists-search-bar-input-mobile').value.trim().toLowerCase())
        )

        myPlaylistsFiltered.forEach((element) => {
            let divItemMinhasPlaylists = document.createElement("div");
            divItemMinhasPlaylists.classList.add("item-minhas-playlists-mobile");
            divItemMinhasPlaylists.addEventListener('click', () => {
                document.querySelector('.main-minhas-playlists-mobile .main-playlist-mobile .content-mobile .title-mobile').textContent = element.title;
                document.querySelector('.main-minhas-playlists-mobile .main-playlist-mobile .content-mobile .details-mobile .created-mobile').textContent = converterData(element.additionDate);
                document.querySelector('.main-minhas-playlists-mobile .main-playlist-mobile .content-mobile .details-mobile .total-video-mobile').textContent = `Total de ${element.totalVideos} ${element.totalVideos <= 1 ? 'vídeo' : 'vídeos'}`;
                document.querySelector('.main-minhas-playlists-mobile .main-playlist-mobile .cover-mobile img').src = element.currentCoverUrl
                indexMyPlaylistId = element._id;
                document.querySelector('.edit-my-new-playlist-overflow-mobile .edit-my-new-playlist-container-mobile .edit-my-new-playlist-name-mobile').value = element.title;
                document.querySelector('.delete-my-new-playlist-overflow-mobile .delete-my-new-playlist-container-mobile .delete-my-new-playlist-current-mobile').textContent = element.title;
                toggleContainerMinhaPlaylist()

                containerVideo.innerHTML = ""

                element.videos.reverse().forEach((ele) => {
                    let videoaEncontrada = allVideoData.find(element => element._id === ele.videoId)

                    let divItemMinhasVideos = document.createElement("div");
                    divItemMinhasVideos.classList.add("item-minhas-videos-mobile");
                    divItemMinhasVideos.addEventListener('click', () => {
                        document.querySelector('.video-my-new-playlist-overflow-mobile .video-my-new-playlist-container-mobile .video-my-new-playlist-title-mobile').textContent = videoaEncontrada.title;
                        document.querySelector('.video-my-new-playlist-overflow-mobile .video-my-new-playlist-container-mobile .video-my-new-playlist-cover-mobile img').src = videoaEncontrada.coverUrl;
                        document.querySelector('.video-delete-my-new-playlist-overflow-mobile .video-delete-my-new-playlist-container-mobile .video-delete-my-new-playlist-current-mobile').textContent = videoaEncontrada.title;
                        indexMyPlaylistAudioId = ele._id;
                        toggleVideoMinhaPlaylist()
                    })

                    let divCoverItemMinhasVideos = document.createElement("div");
                    divCoverItemMinhasVideos.classList.add("cover-item-minhas-videos-mobile");

                    let imgCover = document.createElement("img");
                    imgCover.src = videoaEncontrada.coverUrl;

                    let divTitleItemMinhasVideos = document.createElement("div");
                    divTitleItemMinhasVideos.classList.add("title-item-minhas-videos-mobile");
                    divTitleItemMinhasVideos.textContent = videoaEncontrada.title;

                    divCoverItemMinhasVideos.appendChild(imgCover);
                    divItemMinhasVideos.appendChild(divCoverItemMinhasVideos);
                    divItemMinhasVideos.appendChild(divTitleItemMinhasVideos);

                    containerVideo.appendChild(divItemMinhasVideos)
                })
            })

            let divCoverItemMinhasPlaylists = document.createElement("div");
            divCoverItemMinhasPlaylists.classList.add("cover-item-minhas-playlists-mobile");

            let imgCover = document.createElement("img");
            imgCover.src = element.currentCoverUrl;

            let divTitleItemMinhasPlaylists = document.createElement("div");
            divTitleItemMinhasPlaylists.classList.add("title-item-minhas-playlists-mobile");
            divTitleItemMinhasPlaylists.textContent = element.title;

            let divTotalDeVideos = document.createElement("div");
            divTotalDeVideos.classList.add("total-de-videos-mobile");
            divTotalDeVideos.textContent = "TM";

            let divTotalDeVideosQuantidade = document.createElement("div");
            divTotalDeVideosQuantidade.classList.add("total-de-videos-quantidade-mobile");
            divTotalDeVideosQuantidade.textContent = element.totalVideos;

            divCoverItemMinhasPlaylists.appendChild(imgCover);
            divItemMinhasPlaylists.appendChild(divCoverItemMinhasPlaylists);
            divItemMinhasPlaylists.appendChild(divTitleItemMinhasPlaylists);
            divItemMinhasPlaylists.appendChild(divTotalDeVideos);
            divItemMinhasPlaylists.appendChild(divTotalDeVideosQuantidade);

            container.appendChild(divItemMinhasPlaylists);
        })
        if (container.innerHTML === "") {
            if(document.querySelector('.minhas-playlists-search-bar-input-mobile').value.trim() !== ""){
                container.innerHTML = `
                <div class="no-playlist-mobile">
                    Sua pesquisa não encontrou nenhuma playlist
                </div>
                `
            } else {
                container.innerHTML = `
                <div class="no-playlist-mobile">
                    Você não possui nenhuma playlist
                </div>
                `
            }
        }
    }
}
function generatorContainerCurrentVideoAddPlaylist() {
    if (screenWidth >= 1360) {
        const currentVideoAddPlaylistContainer = document.querySelector('.current-video-add-playlist-container');

        currentVideoAddPlaylistContainer.innerHTML = "";
    
        userData.myPlaylists.forEach((element) => {
            const video = element.videos.find(video => video.videoId === indexAudioId);
    
            const divItem = document.createElement('div');
            divItem.classList.add('current-video-add-playlist-item');
            divItem.addEventListener('click', () => {
                divItem.style.pointerEvents = 'none';
                if (video) {
                    fetch(`/users-playlist-video/${userData._id}/${element._id}/${video._id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    })
                    .then(response => {
                        if (response.status === 200) return
                        else {
                            if(screenWidth >= 1360){
                                warning.classList.remove('hidden')
                                warning.textContent = 'Internal Error!'
                                setTimeout(() => {
                                    warning.classList.add('hidden')
                                }, 3000)
                            } else {
                                warningMobile.classList.remove('hidden')
                                warningMobile.textContent = 'Internal Error!'
                                setTimeout(() => {
                                    warningMobile.classList.add('hidden')
                                }, 3000)
                            }
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    })
                    .finally(() => {
                        refreshUserWithNewPlaylist()
                        divStatus.style.pointerEvents = 'auto';
                    });
                } else {
                    fetch(`/users-playlist-video/${userData._id}/${element._id}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            videoIds: [indexAudioId]
                        })
                    })
                    .then(response => {
                        if (response.status === 201) return
                        else {
                            if(screenWidth >= 1360){
                                warning.classList.remove('hidden')
                                warning.textContent = 'Internal Error!'
                                setTimeout(() => {
                                    warning.classList.add('hidden')
                                }, 3000)
                            } else {
                                warningMobile.classList.remove('hidden')
                                warningMobile.textContent = 'Internal Error!'
                                setTimeout(() => {
                                    warningMobile.classList.add('hidden')
                                }, 3000)
                            }
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    })
                    .finally(() => {
                        refreshUserWithNewPlaylist()
                        divItem.style.pointerEvents = 'auto';
                    });
                }
            });
    
            const divStatus = document.createElement('div');
            divStatus.classList.add('current-video-add-playlist-status');
    
            const ionIcon = document.createElement('ion-icon');
            if (video) {
                ionIcon.setAttribute('name', 'checkbox');
            } else {
                ionIcon.setAttribute('name', 'square-outline');
            }
    
            divStatus.appendChild(ionIcon);
    
            const divTitle = document.createElement('div');
            divTitle.classList.add('current-video-add-playlist-title');
            divTitle.textContent = element.title;
    
            divItem.appendChild(divStatus);
            divItem.appendChild(divTitle);
    
            currentVideoAddPlaylistContainer.appendChild(divItem);
        })
    } else {
        const currentVideoAddPlaylistContainerMobile = document.querySelector('.current-video-add-playlist-container-mobile');

        currentVideoAddPlaylistContainerMobile.innerHTML = "";
    
        userData.myPlaylists.forEach((element) => {
            const video = element.videos.find(video => video.videoId === indexAudioId);
    
            const divItem = document.createElement('div');
            divItem.classList.add('current-video-add-playlist-item-mobile');
            divItem.addEventListener('click', () => {
                divItem.style.pointerEvents = 'none';
                if (video) {
                    fetch(`/users-playlist-video/${userData._id}/${element._id}/${video._id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    })
                    .then(response => {
                        if (response.status === 200) return
                        else {
                            if(screenWidth >= 1360){
                                warning.classList.remove('hidden')
                                warning.textContent = 'Internal Error!'
                                setTimeout(() => {
                                    warning.classList.add('hidden')
                                }, 3000)
                            } else {
                                warningMobile.classList.remove('hidden')
                                warningMobile.textContent = 'Internal Error!'
                                setTimeout(() => {
                                    warningMobile.classList.add('hidden')
                                }, 3000)
                            }
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    })
                    .finally(() => {
                        refreshUserWithNewPlaylist()
                        divStatus.style.pointerEvents = 'auto';
                    });
                } else {
                    fetch(`/users-playlist-video/${userData._id}/${element._id}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            videoIds: [indexAudioId]
                        })
                    })
                    .then(response => {
                        if (response.status === 201) return
                        else {
                            if(screenWidth >= 1360){
                                warning.classList.remove('hidden')
                                warning.textContent = 'Internal Error!'
                                setTimeout(() => {
                                    warning.classList.add('hidden')
                                }, 3000)
                            } else {
                                warningMobile.classList.remove('hidden')
                                warningMobile.textContent = 'Internal Error!'
                                setTimeout(() => {
                                    warningMobile.classList.add('hidden')
                                }, 3000)
                            }
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    })
                    .finally(() => {
                        refreshUserWithNewPlaylist()
                        divItem.style.pointerEvents = 'auto';
                    });
                }
            });
    
            const divStatus = document.createElement('div');
            divStatus.classList.add('current-video-add-playlist-status-mobile');
    
            const ionIcon = document.createElement('ion-icon');
            if (video) {
                ionIcon.setAttribute('name', 'checkbox');
            } else {
                ionIcon.setAttribute('name', 'square-outline');
            }
    
            divStatus.appendChild(ionIcon);
    
            const divTitle = document.createElement('div');
            divTitle.classList.add('current-video-add-playlist-title-mobile');
            divTitle.textContent = element.title;
    
            divItem.appendChild(divStatus);
            divItem.appendChild(divTitle);
    
            currentVideoAddPlaylistContainerMobile.appendChild(divItem);
        })
    }
}

let canMoveTheSliderDuration = true;

function videoStateControllers(){
    audioGlobal.addEventListener('timeupdate', () => {

        if (screenWidth >= 1360) {
            if(canMoveTheSliderDuration){
                sliderVideoDuration.value = parseInt(audioGlobal.currentTime / audioGlobal.duration * 100);
                sliderVideoDuration.style.setProperty("background-image", `linear-gradient(to right, var(--color-blue-2) 0%, var(--color-blue-2) ${sliderVideoDuration.value}%, var(--color-white-1) ${sliderVideoDuration.value}%, var(--color-white-1) 100%`);
                sliderVideoDurationDot.style.setProperty("left", `${(sliderVideoDuration.value)}%`)
                
                let minCurrent = Math.floor(audioGlobal.currentTime / 60);
                let segCurrent = Math.floor(audioGlobal.currentTime % 60);

                if(segCurrent < 10){
                    segCurrent = `0${segCurrent}`
                }

                currentDuration.innerHTML = `${minCurrent}:${segCurrent}`
            }
        } else {
            if(canMoveTheSliderDuration){
                sliderVideoDurationMobile.value = parseInt(audioGlobal.currentTime / audioGlobal.duration * 100);
                sliderVideoDurationMobile.style.setProperty("background-image", `linear-gradient(to right, var(--color-blue-2) 0%, var(--color-blue-2) ${sliderVideoDurationMobile.value}%, var(--color-white-1) ${sliderVideoDurationMobile.value}%, var(--color-white-1) 100%`);
                displayVideoDurationMobile.style.setProperty("background-image", `linear-gradient(to right, var(--color-blue-2) 0%, var(--color-blue-2) ${sliderVideoDurationMobile.value}%, var(--color-white-1) ${sliderVideoDurationMobile.value}%, var(--color-white-1) 100%`);
                sliderVideoDurationDotMobile.style.setProperty("left", `${(sliderVideoDurationMobile.value)}%`)

                let minCurrent = Math.floor(audioGlobal.currentTime / 60);
                let segCurrent = Math.floor(audioGlobal.currentTime % 60);

                if(segCurrent < 10){
                    segCurrent = `0${segCurrent}`
                }

                currentDurationMobile.innerHTML = `${minCurrent}:${segCurrent}`
            }
        }
    })
    audioGlobal.oncanplaythrough = () => {
        let minTotal = Math.floor(audioGlobal.duration / 60);
        let segTotal = Math.floor(audioGlobal.duration % 60);
        
        if(segTotal < 10){
            segTotal = `0${segTotal}`
        }

        if (screenWidth >= 1360) {
            totalDuration.innerHTML = `${minTotal}:${segTotal}`
        } else {
            totalDurationMobile.innerHTML = `${minTotal}:${segTotal}`
        }
    };

    audioGlobal.addEventListener("ended", audioControllerNextFunction);

    repeatIcon.addEventListener("click", repeatToggle);
    shuffleIcon.addEventListener("click", shuffleToggle);

    repeatIconMobile.addEventListener("click", repeatToggle);
    shuffleIconMobile.addEventListener("click", shuffleToggle);
}


function durationSliderEventGenerator(){
    if (screenWidth >= 1360) {
        sliderVideoDuration.addEventListener("mousedown", () => {
            canMoveTheSliderDuration = false
        })
        sliderVideoDuration.addEventListener("touchstart", () => {
            canMoveTheSliderDuration = false
        })
        sliderVideoDuration.addEventListener("mouseup", () => {
            audioGlobal.currentTime = ((sliderVideoDuration.value) / 100) * audioGlobal.duration;
            audioGlobal.play();
            audioControllerPlayToggle = false;
            audioControllerPlay.name = 'pause-circle';
            videoAnimationStatus.classList.add('run');
            canMoveTheSliderDuration = true
        })
        sliderVideoDuration.addEventListener("touchend", () => {
            audioGlobal.currentTime = ((sliderVideoDuration.value) / 100) * audioGlobal.duration;
            audioGlobal.play();
            audioControllerPlayToggle = false;
            audioControllerPlay.name = 'pause-circle';
            videoAnimationStatus.classList.add('run');
            canMoveTheSliderDuration = true
        })


        sliderVideoDuration.oninput = () => {
            if(videoDataShuffled[indexAudio].theme == 'Original'){
                sliderVideoDuration.style.setProperty("background-image", `linear-gradient(to right, var(--color-blue-2) 0%, var(--color-blue-2) ${sliderVideoDuration.value}%, var(--color-white-1) ${sliderVideoDuration.value}%, var(--color-white-1) 100%`);
                sliderVideoDurationDot.style.setProperty("left", `${(sliderVideoDuration.value)}%`)
            }
            if(videoDataShuffled[indexAudio].theme == 'Rock Version'){
                sliderVideoDuration.style.setProperty("background-image", `linear-gradient(to right, var(--color-red-2) 0%, var(--color-red-2) ${sliderVideoDuration.value}%, var(--color-white-1) ${sliderVideoDuration.value}%, var(--color-white-1) 100%)`);
                sliderVideoDurationDot.style.setProperty("left", `${(sliderVideoDuration.value)}%`)
            }
            sliderVideoDurationDot.style.setProperty("left", `${(sliderVideoDuration.value)}%`)

            let interactionWithTheSlider = ((sliderVideoDuration.value) / 100) * (audioGlobal.duration)

            let minCurrent = Math.floor(interactionWithTheSlider / 60);
            let segCurrent = Math.floor(interactionWithTheSlider % 60);

            if(segCurrent < 10){
                segCurrent = `0${segCurrent}`
            }
            currentDuration.innerHTML = `${minCurrent}:${segCurrent}`
        }
    } else {
        sliderVideoDurationMobile.addEventListener("mousedown", () => {
            canMoveTheSliderDuration = false
        })
        sliderVideoDurationMobile.addEventListener("touchstart", () => {
            canMoveTheSliderDuration = false
        })
        sliderVideoDurationMobile.addEventListener("mouseup", () => {
            audioGlobal.currentTime = ((sliderVideoDurationMobile.value) / 100) * audioGlobal.duration;
            audioGlobal.play();
            audioControllerPlayToggle = false;
            audioControllerPlayMobile.name = 'pause-circle';
            videoAnimationStatus.classList.add('run');
            canMoveTheSliderDuration = true
        })
        sliderVideoDurationMobile.addEventListener("touchend", () => {
            audioGlobal.currentTime = ((sliderVideoDurationMobile.value) / 100) * audioGlobal.duration;
            audioGlobal.play();
            audioControllerPlayToggle = false;
            audioControllerPlayMobile.name = 'pause-circle';
            videoAnimationStatus.classList.add('run');
            canMoveTheSliderDuration = true
        })
    
    
        sliderVideoDurationMobile.oninput = () => {
            if(videoDataShuffled[indexAudio].theme == 'Original'){
                sliderVideoDurationMobile.style.setProperty("background-image", `linear-gradient(to right, var(--color-blue-2) 0%, var(--color-blue-2) ${sliderVideoDurationMobile.value}%, var(--color-white-1) ${sliderVideoDurationMobile.value}%, var(--color-white-1) 100%`);
                sliderVideoDurationDotMobile.style.setProperty("left", `${(sliderVideoDurationMobile.value)}%`)
            }
            if(videoDataShuffled[indexAudio].theme == 'Rock Version'){
                sliderVideoDurationMobile.style.setProperty("background-image", `linear-gradient(to right, var(--color-red-2) 0%, var(--color-red-2) ${sliderVideoDurationMobile.value}%, var(--color-white-1) ${sliderVideoDurationMobile.value}%, var(--color-white-1) 100%)`);
                sliderVideoDurationDotMobile.style.setProperty("left", `${(sliderVideoDurationMobile.value)}%`)
            }
            sliderVideoDurationDot.style.setProperty("left", `${(sliderVideoDurationMobile.value)}%`)
    
            let interactionWithTheSlider = ((sliderVideoDurationMobile.value) / 100) * (audioGlobal.duration)
    
            let minCurrent = Math.floor(interactionWithTheSlider / 60);
            let segCurrent = Math.floor(interactionWithTheSlider % 60);
    
            if(segCurrent < 10){
                segCurrent = `0${segCurrent}`
            }
            currentDurationMobile.innerHTML = `${minCurrent}:${segCurrent}`
        }
    }
}

function volumeSliderEventGenerator(){
    sliderVideoVolume.addEventListener("mousedown", () => {
        canMoveTheSliderVolume = false
    })
    sliderVideoVolume.addEventListener("touchstart", () => {
        canMoveTheSliderVolume = false
    })
    sliderVideoVolume.addEventListener("mouseup", () => {
        canMoveTheSliderVolume = true
    })
    sliderVideoVolume.addEventListener("touchend", () => {
        canMoveTheSliderVolume = true
    })


    sliderVideoVolume.oninput = () => {
        if(videoDataShuffled[indexAudio].theme == 'Original'){
            sliderVideoVolume.style.setProperty("background-image", `linear-gradient(to right, var(--color-blue-2) 0%, var(--color-blue-2) ${sliderVideoVolume.value}%, var(--color-white-1) ${sliderVideoVolume.value}%, var(--color-white-1) 100%`);
            sliderVideoVolumeDot.style.setProperty("left", `${(sliderVideoVolume.value)}%`)
        }
        if(videoDataShuffled[indexAudio].theme == 'Rock Version'){
            sliderVideoVolume.style.setProperty("background-image", `linear-gradient(to right, var(--color-red-2) 0%, var(--color-red-2) ${sliderVideoVolume.value}%, var(--color-white-1) ${sliderVideoVolume.value}%, var(--color-white-1) 100%)`);
            sliderVideoVolumeDot.style.setProperty("left", `${(sliderVideoVolume.value)}%`)
        }
        sliderVideoVolumeDot.style.setProperty("left", `${(sliderVideoVolume.value)}%`)

        audioGlobal.volume = sliderVideoVolume.value / 100;
    }

    audioGlobal.volume = sliderVideoVolume.value / 100;
}

function initDurationSlider(){
    if (screenWidth >= 1360) {
        if(videoDataShuffled[indexAudio].theme == 'Original'){
            sliderVideoDuration.style.setProperty("background-image", `linear-gradient(to right, var(--color-blue-2) 0%, var(--color-blue-2) ${sliderVideoDuration.value}%, var(--color-white-1) ${sliderVideoDuration.value}%, var(--color-white-1) 100%`);
            sliderVideoDurationDot.style.setProperty("left", `${(sliderVideoDuration.value)}%`)
        }
        if(videoDataShuffled[indexAudio].theme == 'Rock Version'){
            sliderVideoDuration.style.setProperty("background-image", `linear-gradient(to right, var(--color-red-2) 0%, var(--color-red-2) ${sliderVideoDuration.value}%, var(--color-white-1) ${sliderVideoDuration.value}%, var(--color-white-1) 100%)`);
            sliderVideoDurationDot.style.setProperty("left", `${(sliderVideoDuration.value)}%`)
        }
        sliderVideoDurationDot.style.setProperty("left", `${(sliderVideoDuration.value)}%`)
    } else {
        if(videoDataShuffled[indexAudio].theme == 'Original'){
            sliderVideoDurationMobile.style.setProperty("background-image", `linear-gradient(to right, var(--color-blue-2) 0%, var(--color-blue-2) ${sliderVideoDurationMobile.value}%, var(--color-white-1) ${sliderVideoDurationMobile.value}%, var(--color-white-1) 100%`);
            displayVideoDurationMobile.style.setProperty("background-image", `linear-gradient(to right, var(--color-blue-2) 0%, var(--color-blue-2) ${sliderVideoDurationMobile.value}%, var(--color-white-1) ${sliderVideoDurationMobile.value}%, var(--color-white-1) 100%`);
            sliderVideoDurationDotMobile.style.setProperty("left", `${(sliderVideoDurationMobile.value)}%`)
        }
        if(videoDataShuffled[indexAudio].theme == 'Rock Version'){
            sliderVideoDurationMobile.style.setProperty("background-image", `linear-gradient(to right, var(--color-red-2) 0%, var(--color-red-2) ${sliderVideoDurationMobile.value}%, var(--color-white-1) ${sliderVideoDurationMobile.value}%, var(--color-white-1) 100%)`);
            displayVideoDurationMobile.style.setProperty("background-image", `linear-gradient(to right, var(--color-red-2) 0%, var(--color-red-2) ${sliderVideoDurationMobile.value}%, var(--color-white-1) ${sliderVideoDurationMobile.value}%, var(--color-white-1) 100%)`);
            sliderVideoDurationDotMobile.style.setProperty("left", `${(sliderVideoDurationMobile.value)}%`)
        }
        sliderVideoDurationDotMobile.style.setProperty("left", `${(sliderVideoDurationMobile.value)}%`)
    }
}

function initVolumeSlider(){
    if(videoDataShuffled[indexAudio].theme == 'Original'){
        sliderVideoVolume.style.setProperty("background-image", `linear-gradient(to right, var(--color-blue-2) 0%, var(--color-blue-2) ${sliderVideoVolume.value}%, var(--color-white-1) ${sliderVideoVolume.value}%, var(--color-white-1) 100%`);
        sliderVideoVolumeDot.style.setProperty("left", `${(sliderVideoVolume.value)}%`)
    }
    if(videoDataShuffled[indexAudio].theme == 'Rock Version'){
        sliderVideoVolume.style.setProperty("background-image", `linear-gradient(to right, var(--color-red-2) 0%, var(--color-red-2) ${sliderVideoVolume.value}%, var(--color-white-1) ${sliderVideoVolume.value}%, var(--color-white-1) 100%)`);
        sliderVideoVolumeDot.style.setProperty("left", `${(sliderVideoVolume.value)}%`)
    }
    sliderVideoVolumeDot.style.setProperty("left", `${(sliderVideoVolume.value)}%`)
}

let repeatToggleControl = true;
function repeatToggle(){
    if(repeatToggleControl){
        audioGlobal.loop = true;
        repeatToggleControl = false

        repeatIcon.classList.add('active');
        repeatIconMobile.classList.add('active');

        if(!shuffleToggleControl){
            shuffleToggle();
        }
    }
    else {
        audioGlobal.loop = false;
        repeatToggleControl = true

        repeatIcon.classList.remove('active');
        repeatIconMobile.classList.remove('active');
    }
}

function shuffleArray(preShuffleArray) {
    const size = preShuffleArray.length;
    let currentIndex = size - 1;

    while (currentIndex > 0) {
        let ramdomIndex = Math.floor(Math.random() * size);
        let aux = preShuffleArray[currentIndex];
        preShuffleArray[currentIndex] = preShuffleArray[ramdomIndex];
        preShuffleArray[ramdomIndex] = aux
        currentIndex -= 1;
    }
    audioControllerPrevFunction()
}

let shuffleToggleControl = true;

function shuffleToggle(){
    if(shuffleToggleControl){
        shuffleIcon.classList.add('active');
        shuffleIconMobile.classList.add('active');
        
        shuffleToggleControl = false

        shuffleArray(videoDataShuffled)
        
        if(!repeatToggleControl){
            repeatToggle();
        }
    }
    else {
        shuffleIcon.classList.remove('active');
        shuffleIconMobile.classList.remove('active');

        shuffleToggleControl = true
        videoDataShuffled = [...videoData];
        indexAudio = 1
        audioControllerPrevFunction()
    }
}

function videoFilteringFunction(){
    if (screenWidth >= 1360) {
        containerItemsSearch.innerHTML = "";

        $('.video-not-found').hide();
        
        generatorContainerSearchData()
        generatorContainerSearchDataPlay()
        if (!emptyPlaylist) {
        }
        
        if (containerItemsSearch.innerHTML == ''){
            $('.video-not-found').show();
        }
    } else {
        containerItemsSearchMobile.innerHTML = "";

        $('.video-not-found-mobile').hide();
        
        generatorContainerSearchData()
        generatorContainerSearchDataPlay()
        if (!emptyPlaylist) {
        }
        
        if (containerItemsSearchMobile.innerHTML == ''){
            $('.video-not-found-mobile').show();
        }
    }
}

let profileWasClicked = true;

function searchEvents(){
    searchButton.addEventListener("click", () => {
        $('.search-bar').toggle(400)
        $('.search-bar input').val("")
    })
    $('.search-bar-close').click(() => {
        $('.search-bar input').val("");
        videoFilteringFunction();
    })
    $('.main-search-mobile .search-bar-mobile .search-bar-close-mobile').click(() => {
        $('.main-search-mobile .search-bar-mobile input').val("");
        videoFilteringFunction();
    })
    $('.search-bar input').click(function() {
        $('.container-search-result').show(200)
        $('.focus-shadow').show(200)
        $('.container-user-settings').hide(200)
        $(".menu-options").hide(200)
        profileWasClicked = true;
        canKeyboardEvents = false;
        canKeyboardEventsProfile = false;
    });
    $('.container-settings .user-settings').click(function() {
        toggleTemplateUser();
    });
    $('.header-mobile .box-wrapper-header-mobile .user-settings').click(function() {
        toggleTemplateUser();
    });
    
    $('.focus-shadow').click(()=>{
        $('.focus-shadow').hide(200)
        $('.container-search-result').hide(200)
        $('.container-user-settings').hide(200)
        profileWasClicked = true;
        canKeyboardEvents = true;
        canKeyboardEventsProfile = true;
    })

    searchBarInput.oninput = () => {
        videoFilteringFunction();
    };
    searchBarInputMobile.oninput = () => {
        videoFilteringFunction();
    };

    $('.header-mobile .user-settings').click(()=>{
        $('.main-user-settings-mobile').toggle(200)
        $(".menu-options-mobile").hide(200)
    })
    $('.main-user-settings-mobile .display-back').click(()=>{
        $('.main-user-settings-mobile').toggle(200)
    })
    $('.header-mobile .search-icon-mobile').click(()=>{
        $('.main-search-mobile').toggle(200)
        $(".menu-options-mobile").hide(200)
        $('.main-controls-mobile').addClass("fixed")
    })
    $('.main-search-mobile .display-back').click(()=>{
        $('.main-search-mobile').toggle(200)
        $('.main-controls-mobile').removeClass("fixed")
    })
}

function toggleTemplateUser() {
    if(profileWasClicked){
        $('.container-user-settings').show(200)
        $('.focus-shadow').show(200)
        $('.container-search-result').hide(200)
        $(".menu-options").hide(200)
        profileWasClicked = false;
        canKeyboardEvents = false;
        canKeyboardEventsProfile = true;
    }
    else {
        $('.focus-shadow').hide(200)
        $('.container-search-result').hide(200)
        $('.container-user-settings').hide(200)
        profileWasClicked = true;
        canKeyboardEvents = true;
        canKeyboardEventsProfile = true;
    }
}

function setVideoPlayTag() {
    $(".video-playing").removeClass("video-playing");
    $(`div[data-id="${indexAudioId}"] .box-wrapper .info-item`).addClass("video-playing");
}

function allFunctionResizing() {
    if (screenWidth >= 1360) {
        videoResizingFunction();
    }

    setScreenWidthAndHeight();
    deviceDefinition();
}

function videoResizingFunction() {
    if(document.querySelector(".container-frame iframe")){
        document.querySelector(".container-frame iframe").style.width = 0 + "px";
        document.querySelector(".container-frame iframe").style.height = 0 + "px";

        var widthOfVideo = parseInt(getComputedStyle(document.querySelector('.ghost-frame')).width);
        var heightOfVideo;

        heightOfVideo = parseFloat(widthOfVideo) * (563 / 1000) + "px";
        widthOfVideo = widthOfVideo + "px";
        if (parseFloat(widthOfVideo) > 1000) {
            widthOfVideo = 1000 + "px";
        }
        if (parseFloat(heightOfVideo) > 566.5) {
            heightOfVideo = 566.5 + "px";
        }
        
        document.querySelector(".container-frame iframe").style.width = widthOfVideo;
        document.querySelector(".container-frame iframe").style.height = heightOfVideo;
    }
}

function setScreenWidthAndHeight() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
}

function logoutService() {
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });

    window.location = '/'
}

function getCookie(k) {
    var cookies = " " + document.cookie;
    var key = " " + k + "=";
    var start = cookies.indexOf(key);

    if (start === -1) return null;

    var pos = start + key.length;
    var last = cookies.indexOf(";", pos);

    if (last !== -1) return cookies.substring(pos, last);

    return cookies.substring(pos);
}

async function manageHistoric() {
    const idUserConnected = getCookie("user")
    let video = {
        videoId: indexAudioId,
        videoGender: indexAudioGender
    }

    const resposta = await fetch(`/videos-historic/${idUserConnected}`, {
        method: "PUT",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        },
        body: JSON.stringify(video)
    });
    if(resposta.status == 200){
        refreshUser();
    }
    if(resposta.status != 200){
        if(screenWidth >= 1360){
            warning.classList.remove('hidden')
            warning.textContent = 'Internal Error!'
            setTimeout(() => {
                warning.classList.add('hidden')
            }, 3000)
        } else {
            warningMobile.classList.remove('hidden')
            warningMobile.textContent = 'Internal Error!'
            setTimeout(() => {
                warningMobile.classList.add('hidden')
            }, 3000)
        }
    }
}

async function manageHistoricClear() {
    const idUserConnected = getCookie("user")
    let video = {
        videoId: "clear",
        videoGender: indexAudioGender
    }

    const resposta = await fetch(`/videos-historic/${idUserConnected}`, {
        method: "PUT",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        },
        body: JSON.stringify(video)
    });
    if(resposta.status == 200){
        refreshUser();
    }
    if(resposta.status != 200){
        if(screenWidth >= 1360){
            warning.classList.remove('hidden')
            warning.textContent = 'Internal Error!'
            setTimeout(() => {
                warning.classList.add('hidden')
            }, 3000)
        } else {
            warningMobile.classList.remove('hidden')
            warningMobile.textContent = 'Internal Error!'
            setTimeout(() => {
                warningMobile.classList.add('hidden')
            }, 3000)
        }
    }
}

async function manageFavorite() {
    const idUserConnected = getCookie("user")
    let video = {
        videoId: indexAudioId,
        videoGender: indexAudioGender
    }

    if (screenWidth >= 1360) {
        videoFavoriteIcon.style.pointerEvents = "none"
    } else {
        videoFavoriteIconMobile.style.pointerEvents = "none"
    }
    
    const resposta = await fetch(`/videos-favorite/${idUserConnected}`, {
        method: "PUT",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        },
        body: JSON.stringify(video)
    });

    const respostaJson = await resposta.json()

    if(respostaJson.message == "limit reached"){
        if(screenWidth >= 1360){
            warning.classList.remove('hidden')
            warning.textContent = 'Limite de Vídeos favoritos atingido!'
            setTimeout(() => {
                warning.classList.add('hidden')
            }, 3000)
        } else {
            warningMobile.classList.remove('hidden')
            warningMobile.textContent = 'Limite de Vídeos favoritos atingido!'
            setTimeout(() => {
                warningMobile.classList.add('hidden')
            }, 3000)
        }
    }
    if(resposta.status == 200){
        await refreshUser()
        refreshFavorite();
        if (screenWidth >= 1360) {
            videoFavoriteIcon.style.pointerEvents = "auto"
        } else {
            videoFavoriteIconMobile.style.pointerEvents = "auto"
        }
    }
    if(resposta.status != 200){
        if (screenWidth >= 1360) {
            videoFavoriteIcon.style.pointerEvents = "auto"
            warning.classList.remove('hidden')
            warning.textContent = 'Internal Error!'
            setTimeout(() => {
                warning.classList.add('hidden')
            }, 3000)
        } else {
            videoFavoriteIconMobile.style.pointerEvents = "auto"
            warningMobile.classList.remove('hidden')
            warningMobile.textContent = 'Internal Error!'
            setTimeout(() => {
                warningMobile.classList.add('hidden')
            }, 3000)
        }
    }
}

async function refreshUserWithNewPlaylist() {
    const idUserConnected = getCookie("user")
    const responseUser = await fetch(`/users/${idUserConnected}`);
    const user = await responseUser.json();

    userData = user.user;
    userData.myPlaylists.reverse()

    generatorContainerCurrentVideoAddPlaylist()
    generatorContainerVideoAddPlaylist()
}

async function refreshUser() {
    const idUserConnected = getCookie("user")
    const responseUser = await fetch(`/users/${idUserConnected}`);
    const user = await responseUser.json();

    userData = user.user;
    userData.myPlaylists.reverse()
    
    if (screenWidth >= 1360) {
        containerItemsHistoric.innerHTML = ""
    } else {
        containerItemsHistoricMobile.innerHTML = ""
    }
    generatorContainerHistoricData();
    generatorContainerHistoricDataPlay();
}

async function refreshFavorite() {
    let isFound = false;
    
    let videoFavorite = userData.favoriteVideos.find(element => element.videoId == videoDataShuffled[indexAudio]._id)

    if (screenWidth >= 1360) {
        if(videoFavorite){
            document.querySelector(".current-video-add-favorite-icon ion-icon").name = "heart"
            isFound = true;
        }
        
        if (!isFound) {
            document.querySelector(".current-video-add-favorite-icon ion-icon").name = "heart-outline"
        }

        containerItemsFavorite.innerHTML = ""
    } else {
        if(videoFavorite){
            videoFavoriteIconMobile.name = "heart"
            document.querySelector(".current-video-add-favorite-icon-mobile ion-icon").name = "heart"

            isFound = true;
        }
        
        if (!isFound) {
            videoFavoriteIconMobile.name = "heart-outline"
            document.querySelector(".current-video-add-favorite-icon-mobile ion-icon").name = "heart-outline"
        }

        containerItemsFavoriteMobile.innerHTML = ""
    }

    generatorContainerFavoriteData()
    generatorContainerFavoriteDataPlay()
}

function toggleMenu() {
    if (screenWidth >= 1360) {
        $(".menu-options").toggle(200)
    } else {
        $(".menu-options-mobile").toggle(200)
    }
}

function toggleMorePlaylists() {
    if (screenWidth >= 1360) {
        $(".main-select-playlists").toggle(200);
    } else {
        $(".main-select-playlists-mobile").toggle(200);
    }
}
function toggleMyPlaylists() {
    if (screenWidth >= 1360) {
        $(".main-minhas-playlists").toggle(200);
    } else {
        $(".main-minhas-playlists-mobile").toggle(200);
    }
}
function toggleContainerMinhaPlaylist() {
    if (screenWidth >= 1360) {
        $(".container-minha-playlist").toggle(200);
    } else {
        $(".container-minha-playlist-mobile").toggle(200);
    }
}
function toggleAddMinhaPlaylist() {
    if (screenWidth >= 1360) {
        const addMyNewPlaylistOverflow = document.querySelector(".add-my-new-playlist-overflow");
        if (addMyNewPlaylistOverflow.classList.contains("hidden")) {
            addMyNewPlaylistOverflow.classList.remove("hidden");
            canKeyboardEvents = false;
        } else {
            addMyNewPlaylistOverflow.classList.add("hidden");
            canKeyboardEvents = true;
        }
    } else {
        const addMyNewPlaylistOverflow = document.querySelector(".add-my-new-playlist-overflow-mobile");
        if (addMyNewPlaylistOverflow.classList.contains("hidden")) {
            addMyNewPlaylistOverflow.classList.remove("hidden");
        } else {
            addMyNewPlaylistOverflow.classList.add("hidden");
        }
    }
}
function toggleEditMinhaPlaylist() {
    if (screenWidth >= 1360) {
        const editOverflow = document.querySelector(".edit-my-new-playlist-overflow");
        if (editOverflow.classList.contains("hidden")) {
            editOverflow.classList.remove("hidden");
            canKeyboardEvents = false;
        } else {
            editOverflow.classList.add("hidden");
            canKeyboardEvents = true;
        }
    } else {
        const editOverflow = document.querySelector(".edit-my-new-playlist-overflow-mobile");
        if (editOverflow.classList.contains("hidden")) {
            editOverflow.classList.remove("hidden");
        } else {
            editOverflow.classList.add("hidden");
        }
    }
}
function toggleDeleteMinhaPlaylist() {
    if (screenWidth >= 1360) {
        const deleteOverflow = document.querySelector(".delete-my-new-playlist-overflow");
        if (deleteOverflow.classList.contains("hidden")) {
            deleteOverflow.classList.remove("hidden");
            canKeyboardEvents = false;
        } else {
            deleteOverflow.classList.add("hidden");
            canKeyboardEvents = true;
        }
    } else {
        const deleteOverflow = document.querySelector(".delete-my-new-playlist-overflow-mobile");
        if (deleteOverflow.classList.contains("hidden")) {
            deleteOverflow.classList.remove("hidden");
        } else {
            deleteOverflow.classList.add("hidden");
        }
    }
}
function toggleVideoMinhaPlaylist() {
    if (screenWidth >= 1360) {
        const videoOverflow = document.querySelector(".video-my-new-playlist-overflow");
        if (videoOverflow.classList.contains("hidden")) {
            videoOverflow.classList.remove("hidden");
        } else {
            videoOverflow.classList.add("hidden");
        }
    } else {
        const videoOverflow = document.querySelector(".video-my-new-playlist-overflow-mobile");
        if (videoOverflow.classList.contains("hidden")) {
            videoOverflow.classList.remove("hidden");
        } else {
            videoOverflow.classList.add("hidden");
        }
    }
}
function toggleDeleteVideoMinhaPlaylist() {
    if (screenWidth >= 1360) {
        $(".video-delete-my-new-playlist-overflow").toggle(200);
    } else {
        $(".video-delete-my-new-playlist-overflow-mobile").toggle(200);
    }
}

function toggleDisplayMobile() {
    if (!displayMobile.classList.contains("show")){
        displayMobile.classList.remove("exit");
        displayMobile.classList.add("show");

        if (!videoDataShuffled[indexAudio].isVideo) {
            audioControllerPlayFunctionNoPause()
        }
        $('.main-search-mobile').hide(200)
        $('.main-controls-mobile').removeClass("fixed")
    } else {
        displayMobile.classList.remove("show");
        displayMobile.classList.add("exit");
        displayMobile.addEventListener("animationend", (event) => {
            if (event.animationName == "down-display") {
                displayMobile.classList.remove("exit");
            }
        });
    }
}

function toggleAddOptions() {
    if (screenWidth >= 1360) {
        const addOptionsOverflow = document.querySelector(".current-video-add-overflow");
        if (addOptionsOverflow.classList.contains("hidden")) {
            addOptionsOverflow.classList.remove("hidden");
            canKeyboardEventsProfile = false;
        } else {
            addOptionsOverflow.classList.add("hidden");
            canKeyboardEventsProfile = true;
        }
    } else {
        const addOptionsOverflow = document.querySelector(".current-video-add-overflow-mobile");
        if (addOptionsOverflow.classList.contains("hidden")) {
            addOptionsOverflow.classList.remove("hidden");
        } else {
            addOptionsOverflow.classList.add("hidden");
        }
    }
}

function toggleLogout() {
    if (screenWidth >= 1360) {
        const logoutOverflow = document.querySelector(".confirm-logout-overflow");
        if (logoutOverflow.classList.contains("hidden")) {
            logoutOverflow.classList.remove("hidden");
            canKeyboardEventsProfile = false;
        } else {
            logoutOverflow.classList.add("hidden");
            canKeyboardEventsProfile = true;
        }
    } else {
        const logoutOverflow = document.querySelector(".confirm-logout-overflow-mobile");
        if (logoutOverflow.classList.contains("hidden")) {
            logoutOverflow.classList.remove("hidden");
        } else {
            logoutOverflow.classList.add("hidden");
        }
    }
}

function audioControllerPlayAudioAndVideo() {
    if (screenWidth >= 1360) {
        if(videoDataShuffled[indexAudio].isVideo){
            document.querySelector(".container-side-2").style.display = "none"
            videoAnimationStatus.classList.remove('run');
        } else {
            document.querySelector(".container-side-2").style.display = "flex"
        }
    } else {
        if(videoDataShuffled[indexAudio].isVideo){
            document.querySelector(".main-display-mobile").classList.add("video-mode")
        } else {
            document.querySelector(".main-display-mobile").classList.remove("video-mode")
        }
    }
}

function initialDeviceDefinition() {
    if (screenWidth >= 1360) {
        initialDevice = "Desktop"
    } else {
        initialDevice = "Mobile"
    }
}

function deviceDefinition() {
    let previousDevice, nextDevice;

    previousDevice = initialDevice;
    
    if (screenWidth >= 1360) {
        initialDevice = "Desktop"
    } else {
        initialDevice = "Mobile"
    }

    nextDevice = initialDevice;

    if (previousDevice != nextDevice) {
        changeMobileOrDesktop();
    }
}

function changeMobileOrDesktop() {
    if (screenWidth >= 1360) {
        containerPlaylist.innerHTML = "";
        containerItemsSearch.innerHTML = "";
        containerItemsFavorite.innerHTML = "";
        containerItemsHistoric.innerHTML = "";
        containerFrameVideoMobile.innerHTML = "";
        containerPlaylistSelect.innerHTML = "";
        $(".title-playlist").html(titlePlaylist ? titlePlaylist : userData.lastAccessedPlaylistName);
        $('.search-bar input').val("");
        videoFilteringFunction();
        audioGlobal.volume = 0.6
        sliderVideoVolume.value = 60;
    } else {
        containerPlaylistMobile.innerHTML = "";
        containerItemsSearchMobile.innerHTML = "";
        containerItemsFavoriteMobile.innerHTML = "";
        containerItemsHistoricMobile.innerHTML = "";
        containerFrameVideo.innerHTML = "";
        containerPlaylistSelectMobile.innerHTML = "";
        $(".title-playlist-mobile").html(titlePlaylist ? titlePlaylist : userData.lastAccessedPlaylistName);
        $('.main-search-mobile .search-bar-mobile input').val("");
        videoFilteringFunction();
    }

    audioGlobal.pause()

    if (screenWidth >= 1360) {
        audioControllerPlay.name = 'play-circle';
        videoAnimationStatus.classList.remove('run');
    } else {
        audioControllerPlayMobile.name = 'play-circle';
    }

    audioControllerPlayToggle = true;

    allVideoValueSetters()
    generatorContainerPlaylistSelectData();
    generatorContainerPlaylistSelectDataPlay();
    generatorContainerPlaylistData();
    generatorContainerPlaylistDataPlay();
    generatorContainerSearchData()
    generatorContainerSearchDataPlay()
    generatorContainerFavoriteData()
    generatorContainerFavoriteDataPlay()
    generatorContainerHistoricData()
    generatorContainerHistoricDataPlay()
    manageEmptyPlaylist()
    manageHistoric();
    setUserProfilePicture()
    setUserSettings()
    generatorContainerCurrentVideoAddPlaylist()
    generatorContainerVideoAddPlaylist()
    if (emptyPlaylist) return
    indexAudioId = videoDataShuffled[indexAudio]._id;
    indexAudioGender = videoDataShuffled[indexAudio].gender;
    refreshFavorite();
    setVideoPlayTag();
    audioControllerPlayAudioAndVideo();
}

function setManagementSystem(){
    if (userData.type == "admin") {
        selectManagementSystem.classList.remove("hidden");
        selectManagementSystemMobile.classList.remove("hidden")
    }
    selectManagementSystem.addEventListener("click", () => {
        window.location = '/config'
    })
    selectManagementSystemMobile.addEventListener("click", () => {
        window.location = '/config'
    })
}

async function manageUserAccountDeletion() {
    if (screenWidth >= 1360) {
        if (deleteAccountInputToConfirm.value !== "Quero deletar minha conta e aceito as condições") {
            warning.classList.remove('hidden')
            warning.textContent = 'Por favor, escreva a frase corretamente.'
            setTimeout(() => {
                warning.classList.add('hidden')
            }, 3000)
            return
        }

        const userToDelete = await fetch(`/users/${userData._id}`, {
            method: "DELETE"
        })
        const response = await userToDelete.json()

        if (response.message === "User removed successfully!") {
            logoutService();
        }
    } else {
        if (deleteAccountInputToConfirmMobile.value !== "Quero deletar minha conta e aceito as condições") {
            warningMobile.classList.remove('hidden')
            warningMobile.textContent = 'Por favor, escreva a frase corretamente.'
            setTimeout(() => {
                warningMobile.classList.add('hidden')
            }, 3000)
            return
        }

        const userToDelete = await fetch(`/users/${userData._id}`, {
            method: "DELETE"
        })
        const response = await userToDelete.json()

        if (response.message === "User removed successfully!") {
            logoutService();
        }
    }
}

function manageMyPlaylistEdition() {
    if (screenWidth >= 1360) {
        const playlistTitle = document.querySelector('.edit-my-new-playlist-overflow .edit-my-new-playlist-container .edit-my-new-playlist-name').value.trim();
        if (playlistTitle === "") {
            if(screenWidth >= 1360){
                warning.classList.remove('hidden')
                warning.textContent = 'Por favor, escreva o nome da playlist corretamente.'
                setTimeout(() => {
                    warning.classList.add('hidden')
                }, 3000)
            } else {
                warningMobile.classList.remove('hidden')
                warningMobile.textContent = 'Por favor, escreva o nome da playlist corretamente.'
                setTimeout(() => {
                    warningMobile.classList.add('hidden')
                }, 3000)
            }
            return
        }
    
        const playlistExists = userData.myPlaylists.filter(playlist => playlist.title === playlistTitle);
    
        if (userData.myPlaylists.find(playlist => playlist.title === playlistTitle && playlist._id === indexMyPlaylistId)) {
            toggleContainerMinhaPlaylist()
            toggleEditMinhaPlaylist()
            return
        }
    
        if (playlistExists.length >= 1) {
            if(screenWidth >= 1360){
                warning.classList.remove('hidden')
                warning.textContent = 'Já existe uma playlist com esse nome.'
                setTimeout(() => {
                    warning.classList.add('hidden')
                }, 3000)
            } else {
                warningMobile.classList.remove('hidden')
                warningMobile.textContent = 'Já existe uma playlist com esse nome.'
                setTimeout(() => {
                    warningMobile.classList.add('hidden')
                }, 3000)
            }
            return
        }
    
        fetch(`/users-playlist/${userData._id}/${indexMyPlaylistId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: document.querySelector('.edit-my-new-playlist-overflow .edit-my-new-playlist-container .edit-my-new-playlist-name').value.trim()})
        })
        .then(response => {
            if (response.status === 200) {
                if (screenWidth >= 1360) {
                    document.querySelector(".title-playlist").textContent = document.querySelector('.edit-my-new-playlist-overflow .edit-my-new-playlist-container .edit-my-new-playlist-name').value.trim();
                } else {
                    document.querySelector(".title-playlist-mobile").textContent = document.querySelector('.edit-my-new-playlist-overflow .edit-my-new-playlist-container .edit-my-new-playlist-name').value.trim();
                }
                toggleContainerMinhaPlaylist()
                toggleEditMinhaPlaylist()
                refreshUserWithNewPlaylist()
            } else {
                if(screenWidth >= 1360){
                    warning.classList.remove('hidden')
                    warning.textContent = 'Internal Error!'
    
                    setTimeout(() => {
                        warning.classList.add('hidden')
                    }, 3000)
                } else {
                    warningMobile.classList.remove('hidden')
                    warningMobile.textContent = 'Internal Error!'
    
                    setTimeout(() => {
                        warningMobile.classList.add('hidden')
                    }, 3000)
                }
            }
        })
    } else {
        const playlistTitle = document.querySelector('.edit-my-new-playlist-overflow-mobile .edit-my-new-playlist-container-mobile .edit-my-new-playlist-name-mobile').value.trim();
        if (playlistTitle === "") {
            if(screenWidth >= 1360){
                warning.classList.remove('hidden')
                warning.textContent = 'Por favor, escreva o nome da playlist corretamente.'
                setTimeout(() => {
                    warning.classList.add('hidden')
                }, 3000)
            } else {
                warningMobile.classList.remove('hidden')
                warningMobile.textContent = 'Por favor, escreva o nome da playlist corretamente.'
                setTimeout(() => {
                    warningMobile.classList.add('hidden')
                }, 3000)
            }
            return
        }
    
        const playlistExists = userData.myPlaylists.filter(playlist => playlist.title === playlistTitle);
    
        if (userData.myPlaylists.find(playlist => playlist.title === playlistTitle && playlist._id === indexMyPlaylistId)) {
            toggleContainerMinhaPlaylist()
            toggleEditMinhaPlaylist()
            return
        }
    
        if (playlistExists.length >= 1) {
            if(screenWidth >= 1360){
                warning.classList.remove('hidden')
                warning.textContent = 'Já existe uma playlist com esse nome.'
                setTimeout(() => {
                    warning.classList.add('hidden')
                }, 3000)
            } else {
                warningMobile.classList.remove('hidden')
                warningMobile.textContent = 'Já existe uma playlist com esse nome.'
                setTimeout(() => {
                    warningMobile.classList.add('hidden')
                }, 3000)
            }
            return
        }
    
        fetch(`/users-playlist/${userData._id}/${indexMyPlaylistId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: document.querySelector('.edit-my-new-playlist-overflow-mobile .edit-my-new-playlist-container-mobile .edit-my-new-playlist-name-mobile').value.trim()})
        })
        .then(response => {
            if (response.status === 200) {
                if (screenWidth >= 1360) {
                    document.querySelector(".title-playlist").textContent = document.querySelector('.edit-my-new-playlist-overflow .edit-my-new-playlist-container .edit-my-new-playlist-name').value.trim();
                } else {
                    document.querySelector(".title-playlist-mobile").textContent = document.querySelector('.edit-my-new-playlist-overflow .edit-my-new-playlist-container .edit-my-new-playlist-name').value.trim();
                }
                toggleContainerMinhaPlaylist()
                toggleEditMinhaPlaylist()
                refreshUserWithNewPlaylist()
            } else {
                if(screenWidth >= 1360){
                    warning.classList.remove('hidden')
                    warning.textContent = 'Internal Error!'
    
                    setTimeout(() => {
                        warning.classList.add('hidden')
                    }, 3000)
                } else {
                    warningMobile.classList.remove('hidden')
                    warningMobile.textContent = 'Internal Error!'
    
                    setTimeout(() => {
                        warningMobile.classList.add('hidden')
                    }, 3000)
                }
            }
        })
    }
}

function manageMyPlaylistDeletion() {
    if (screenWidth >= 1360) {
        if (document.querySelector('.delete-my-new-playlist-overflow .delete-my-new-playlist-container .delete-my-new-playlist-name').value !== document.querySelector('.delete-my-new-playlist-overflow .delete-my-new-playlist-container .delete-my-new-playlist-current').textContent) {
            if(screenWidth >= 1360){
                warning.classList.remove('hidden')
                warning.textContent = 'Por favor, escreva o nome da playlist corretamente.'
                setTimeout(() => {
                    warning.classList.add('hidden')
                }, 3000)
            } else {
                warningMobile.classList.remove('hidden')
                warningMobile.textContent = 'Por favor, escreva o nome da playlist corretamente.'
                setTimeout(() => {
                    warningMobile.classList.add('hidden')
                }, 3000)
            }
            return
        }
    
        fetch(`/users-playlist/${userData._id}/${indexMyPlaylistId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => {
            if (response.status === 200) {
                document.querySelector('.delete-my-new-playlist-overflow .delete-my-new-playlist-container .delete-my-new-playlist-name').value = ""
                toggleContainerMinhaPlaylist()
                toggleDeleteMinhaPlaylist()
                refreshUserWithNewPlaylist()
            } else {
                if(screenWidth >= 1360){
                    warning.classList.remove('hidden')
                    warning.textContent = 'Internal Error!'
    
                    setTimeout(() => {
                        warning.classList.add('hidden')
                    }, 3000)
                } else {
                    warningMobile.classList.remove('hidden')
                    warningMobile.textContent = 'Internal Error!'
    
                    setTimeout(() => {
                        warningMobile.classList.add('hidden')
                    }, 3000)
                }
            }
        })
    } else {
        if (document.querySelector('.delete-my-new-playlist-overflow-mobile .delete-my-new-playlist-container-mobile .delete-my-new-playlist-name-mobile').value !== document.querySelector('.delete-my-new-playlist-overflow-mobile .delete-my-new-playlist-container-mobile .delete-my-new-playlist-current-mobile').textContent) {
            if(screenWidth >= 1360){
                warning.classList.remove('hidden')
                warning.textContent = 'Por favor, escreva o nome da playlist corretamente.'
                setTimeout(() => {
                    warning.classList.add('hidden')
                }, 3000)
            } else {
                warningMobile.classList.remove('hidden')
                warningMobile.textContent = 'Por favor, escreva o nome da playlist corretamente.'
                setTimeout(() => {
                    warningMobile.classList.add('hidden')
                }, 3000)
            }
            return
        }
    
        fetch(`/users-playlist/${userData._id}/${indexMyPlaylistId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => {
            if (response.status === 200) {
                document.querySelector('.delete-my-new-playlist-overflow-mobile .delete-my-new-playlist-container-mobile .delete-my-new-playlist-name-mobile').value = ""
                toggleContainerMinhaPlaylist()
                toggleDeleteMinhaPlaylist()
                refreshUserWithNewPlaylist()
            } else {
                if(screenWidth >= 1360){
                    warning.classList.remove('hidden')
                    warning.textContent = 'Internal Error!'
    
                    setTimeout(() => {
                        warning.classList.add('hidden')
                    }, 3000)
                } else {
                    warningMobile.classList.remove('hidden')
                    warningMobile.textContent = 'Internal Error!'
    
                    setTimeout(() => {
                        warningMobile.classList.add('hidden')
                    }, 3000)
                }
            }
        })
    }
}

function manageEmptyPlaylist() {
    if (!emptyPlaylist) return

    if (screenWidth >= 1360) {
        containerPlaylist.innerHTML = `
        <div class="empty-playlist">
            <h1>Ops, isso não deveria acontecer</h1>
            <p>Por algum motivo, não foi possível carregar esta playlist</p>
            <p>Por favor, selecione outra playlist clicando no botão "Mais" e depois em "Selecionar Playlist"</p>
        </div>
    `
    } else {
        containerPlaylistMobile.innerHTML = `
        <div class="empty-playlist-mobile">
            <h1>Ops, isso não deveria acontecer</h1>
            <p>Por algum motivo, não foi possível carregar esta playlist</p>
            <p>Por favor, selecione outra playlist clicando no botão "Mais" e depois em "Selecionar Playlist"</p>
        </div>
    `
    }
    
}

function manageMyPlaylistVideoDeletion() {
    fetch(`/users-playlist-video/${userData._id}/${indexMyPlaylistId}/${indexMyPlaylistAudioId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => {
        if (response.status === 200) {
            toggleContainerMinhaPlaylist()
            toggleVideoMinhaPlaylist()
            if (screenWidth >= 1360) {
                if (document.querySelector('.video-delete-my-new-playlist-overflow').classList.contains('video-delete-my-new-playlist-overflow')) {
                    document.querySelector('.video-delete-my-new-playlist-overflow').classList.add('hidden');
                }
            } else {
                if (document.querySelector('.video-delete-my-new-playlist-overflow-mobile').classList.contains('video-delete-my-new-playlist-overflow-mobile')) {
                    document.querySelector('.video-delete-my-new-playlist-overflow-mobile').classList.add('hidden');
                }
            }
            
            refreshUserWithNewPlaylist()
        } else {
            if(screenWidth >= 1360){
                warning.classList.remove('hidden')
                warning.textContent = 'Internal Error!'
                setTimeout(() => {
                    warning.classList.add('hidden')
                }, 3000)
            } else {
                warningMobile.classList.remove('hidden')
                warningMobile.textContent = 'Internal Error!'
                setTimeout(() => {
                    warningMobile.classList.add('hidden')
                }, 3000)
            }
        }
    })
}

async function manageUserProfilePicture() {
    if (screenWidth >= 1360) {
        if (userData.profilePicture === "" && profilePictureInput.value.trim() === ""){
            layerProfilePicture.classList.add("hidden")
            canKeyboardEventsProfile = true;
            return
        } 
        
        const resposta = await fetch(`/users-profile-picture/${userData._id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({profilePicture: profilePictureInput.value.trim()})
        })
        
        if(resposta.status != 200){
            if(screenWidth >= 1360){
                warning.classList.remove('hidden')
                warning.textContent = 'Internal Error!'
                setTimeout(() => {
                    warning.classList.add('hidden')
                }, 3000)
            } else {
                warningMobile.classList.remove('hidden')
                warningMobile.textContent = 'Internal Error!'
                setTimeout(() => {
                    warningMobile.classList.add('hidden')
                }, 3000)
            }
            return
        }

        layerProfilePicture.classList.add("hidden")
        await refreshFavorite()
        await refreshUser()
        profilePictureInput.value = userData.profilePicture
        canKeyboardEventsProfile = true;
        setUserProfilePicture()
    } else {
        if (userData.profilePicture === "" && profilePictureInputMobile.value.trim() === ""){
            layerProfilePictureMobile.classList.add("hidden")
            return
        }
        
        const resposta = await fetch(`/users-profile-picture/${userData._id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({profilePicture: profilePictureInputMobile.value.trim()})
        })
        
        if(resposta.status != 200){
            if(screenWidth >= 1360){
                warning.classList.remove('hidden')
                warning.textContent = 'Internal Error!'
                setTimeout(() => {
                    warning.classList.add('hidden')
                }, 3000)
            } else {
                warningMobile.classList.remove('hidden')
                warningMobile.textContent = 'Internal Error!'
                setTimeout(() => {
                    warningMobile.classList.add('hidden')
                }, 3000)
            }
            return
        }

        layerProfilePictureMobile.classList.add("hidden")
        await refreshFavorite()
        await refreshUser()
        profilePictureInputMobile.value = userData.profilePicture
        setUserProfilePicture()
    }
}

function setUserProfilePicture() {
    if (screenWidth >= 1360) {
        if (userData.profilePicture == "") {
            document.querySelector('#userSettingsPersonIcon').classList.remove("hidden")
            document.querySelector('#userSettingsPersonContainer').classList.add("hidden")
            document.querySelector('#userPersonIcon').classList.remove("hidden")
            document.querySelector('#userPersonContainer').classList.add("hidden")
        } else {
            document.querySelector('#userSettingsPersonIcon').classList.add("hidden")
            document.querySelector('#userSettingsPersonContainer').classList.remove("hidden")
            document.querySelector('#userSettingsPersonImg').src = userData.profilePicture
            document.querySelector('#userPersonIcon').classList.add("hidden")
            document.querySelector('#userPersonContainer').classList.remove("hidden")
            document.querySelector('#userPersonImg').src = userData.profilePicture
            profilePictureInput.value = userData.profilePicture
        }
    } else {
        if (userData.profilePicture == "") {
            document.querySelector('#userSettingsPersonIconMobile').classList.remove("hidden")
            document.querySelector('#userSettingsPersonContainerMobile').classList.add("hidden")
            document.querySelector('#userPersonIconMobile').classList.remove("hidden")
            document.querySelector('#userPersonContainerMobile').classList.add("hidden")
        } else {
            document.querySelector('#userSettingsPersonIconMobile').classList.add("hidden")
            document.querySelector('#userSettingsPersonContainerMobile').classList.remove("hidden")
            document.querySelector('#userSettingsPersonImgMobile').src = userData.profilePicture
            document.querySelector('#userPersonIconMobile').classList.add("hidden")
            document.querySelector('#userPersonContainerMobile').classList.remove("hidden")
            document.querySelector('#userPersonImgMobile').src = userData.profilePicture
            profilePictureInputMobile.value = userData.profilePicture
        }
    }
}

async function manageUserCreatePlaylist() {
    if (screenWidth >= 1360) {
        const newPlaylistName = document.querySelector('.add-my-new-playlist-name').value.trim()

        if (newPlaylistName === "") {
            if(screenWidth >= 1360){
                warning.classList.remove('hidden')
                warning.textContent = 'Por favor, digite um nome para a playlist.'
                setTimeout(() => {
                    warning.classList.add('hidden')
                }, 3000)
            } else {
                warningMobile.classList.remove('hidden')
                warningMobile.textContent = 'Por favor, digite um nome para a playlist.'
                setTimeout(() => {
                    warningMobile.classList.add('hidden')
                }, 3000)
            }
            return
        }
        
        for (let i = 0; i < userData.myPlaylists.length; i++) {
            if (userData.myPlaylists[i].title === newPlaylistName) {
                if(screenWidth >= 1360){
                    warning.classList.remove('hidden')
                    warning.textContent = 'Já existe uma playlist com esse nome.'
                    setTimeout(() => {
                        warning.classList.add('hidden')
                    }, 3000)
                } else {
                    warningMobile.classList.remove('hidden')
                    warningMobile.textContent = 'Já existe uma playlist com esse nome.'
                    setTimeout(() => {
                        warningMobile.classList.add('hidden')
                    }, 3000)
                }
                return
            }
        }
    
        try {
            const response = await fetch(`/users-playlist/${userData._id}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title: newPlaylistName })
            });
    
            if (response.status === 201) {
                canKeyboardEvents = true;
                if(screenWidth >= 1360){
                    warning.classList.remove('hidden')
                    warning.classList.add('success')
                    warning.textContent = 'Playlist criada com sucesso!'
                    setTimeout(() => {
                        warning.classList.remove('success')
                        warning.classList.add('hidden')
                    }, 3000)
                } else {
                    warningMobile.classList.remove('hidden')
                    warningMobile.classList.add('success')
                    warningMobile.textContent = 'Playlist criada com sucesso!'
                    setTimeout(() => {
                        warningMobile.classList.remove('success')
                        warningMobile.classList.add('hidden')
                    }, 3000)
                }
    
                await refreshUserWithNewPlaylist()
                document.querySelector('.add-my-new-playlist-name').value = ""
                toggleAddMinhaPlaylist()
            } else {
                if(screenWidth >= 1360){
                    warning.classList.remove('hidden')
                    warning.textContent = 'Erro ao criar a playlist.'
                    setTimeout(() => {
                        warning.classList.add('hidden')
                    }, 3000)
                } else {
                    warningMobile.classList.remove('hidden')
                    warningMobile.textContent = 'Erro ao criar a playlist.'
                    setTimeout(() => {
                        warningMobile.classList.add('hidden')
                    }, 3000)
                }
            }
        } catch (error) {
            console.error(error);
        }
    } else {
        const newPlaylistName = document.querySelector('.add-my-new-playlist-name-mobile').value.trim()

        if (newPlaylistName === "") {
            if(screenWidth >= 1360){
                warning.classList.remove('hidden')
                warning.textContent = 'Por favor, digite um nome para a playlist.'
                setTimeout(() => {
                    warning.classList.add('hidden')
                }, 3000)
            } else {
                warningMobile.classList.remove('hidden')
                warningMobile.textContent = 'Por favor, digite um nome para a playlist.'
                setTimeout(() => {
                    warningMobile.classList.add('hidden')
                }, 3000)
            }
            return
        }
        
        for (let i = 0; i < userData.myPlaylists.length; i++) {
            if (userData.myPlaylists[i].title === newPlaylistName) {
                if(screenWidth >= 1360){
                    warning.classList.remove('hidden')
                    warning.textContent = 'Já existe uma playlist com esse nome.'
                    setTimeout(() => {
                        warning.classList.add('hidden')
                    }, 3000)
                } else {
                    warningMobile.classList.remove('hidden')
                    warningMobile.textContent = 'Já existe uma playlist com esse nome.'
                    setTimeout(() => {
                        warningMobile.classList.add('hidden')
                    }, 3000)
                }
                return
            }
        }
    
        try {
            const response = await fetch(`/users-playlist/${userData._id}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title: newPlaylistName })
            });
    
            if (response.status === 201) {
                canKeyboardEvents = true;
                if(screenWidth >= 1360){
                    warning.classList.remove('hidden')
                    warning.classList.add('success')
                    warning.textContent = 'Playlist criada com sucesso!'
                    setTimeout(() => {
                        warning.classList.remove('success')
                        warning.classList.add('hidden')
                    }, 3000)
                } else {
                    warningMobile.classList.remove('hidden')
                    warningMobile.classList.add('success')
                    warningMobile.textContent = 'Playlist criada com sucesso!'
                    setTimeout(() => {
                        warningMobile.classList.remove('success')
                        warningMobile.classList.add('hidden')
                    }, 3000)
                }
    
                await refreshUserWithNewPlaylist()
                document.querySelector('.add-my-new-playlist-name-mobile').value = ""
                toggleAddMinhaPlaylist()
            } else {
                if(screenWidth >= 1360){
                    warning.classList.remove('hidden')
                    warning.textContent = 'Erro ao criar a playlist.'
                    setTimeout(() => {
                        warning.classList.add('hidden')
                    }, 3000)
                } else {
                    warningMobile.classList.remove('hidden')
                    warningMobile.textContent = 'Erro ao criar a playlist.'
                    setTimeout(() => {
                        warningMobile.classList.add('hidden')
                    }, 3000)
                }
            }
        } catch (error) {
            console.error(error);
        }
    }
}

function selectUserMyPlaylist() {
    const playlist = userData.myPlaylists.find(item => item._id === indexMyPlaylistId);
    const matchingVideos = allVideoData.filter(video => playlist.videos.map(item => item.videoId).includes(video._id)).sort((a, b) => a.title.localeCompare(b.title));

    titlePlaylist = playlist.title;

    if (screenWidth >= 1360) {
        $(".title-playlist").html(playlist.title);
    } else {
        $(".title-playlist-mobile").html(playlist.title);
    }

    videoData = matchingVideos;
    videoDataShuffled = [...videoData];

    if (screenWidth >= 1360) {
        containerPlaylist.innerHTML = "";
        containerItemsSearch.innerHTML = "";
        containerItemsFavorite.innerHTML = "";
        containerItemsHistoric.innerHTML = "";
    } else {
        containerPlaylistMobile.innerHTML = "";
        containerItemsSearchMobile.innerHTML = "";
        containerItemsFavoriteMobile.innerHTML = "";
        containerItemsHistoricMobile.innerHTML = "";
    }

    indexAudio = 0;
    audioGlobal.pause()
    if (screenWidth >= 1360) {
        audioControllerPlay.name = 'play-circle';
        videoAnimationStatus.classList.remove('run');
    } else {
        audioControllerPlayMobile.name = 'play-circle';
    }
    audioControllerPlayToggle = true;

    if (screenWidth >= 1360) {
        shuffleIcon.classList.remove('active');
    } else {
        shuffleIconMobile.classList.remove('active');
    }
    shuffleToggleControl = true;

    allVideoValueSetters()
    generatorContainerPlaylistData();
    generatorContainerPlaylistDataPlay();
    manageEmptyPlaylist();
    if (emptyPlaylist) return
    generatorContainerSearchData()
    generatorContainerSearchDataPlay()
    generatorContainerFavoriteData()
    generatorContainerFavoriteDataPlay()
    generatorContainerHistoricData()
    generatorContainerHistoricDataPlay()

    indexAudioId = videoDataShuffled[indexAudio]._id;
    indexAudioGender = videoDataShuffled[indexAudio].gender;
    setVideoPlayTag();
    refreshFavorite();
    manageHistoric();
    audioControllerPlayAudioAndVideo();
    refreshUserWithNewPlaylist()
    setManagementSystem()
}

async function selectNewPlaylist(playlistSelect, playlistName) {
    const idUserConnected = getCookie("user")
    let playlistSelectForSend = { 
        lastAccessedPlaylist: playlistSelect,
        lastAccessedPlaylistName: playlistName
    }

    if (screenWidth >= 1360) {
        $(".title-playlist").html(playlistName);
    } else {
        $(".title-playlist-mobile").html(playlistName);
    }

    const resposta = await fetch(`/playlists-historic/${idUserConnected}`, {
        method: "PUT",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        },
        body: JSON.stringify(playlistSelectForSend)
    });
    if(resposta.status != 200){
        if(screenWidth >= 1360){
            warning.classList.remove('hidden')
            warning.textContent = 'Internal Error!'
            setTimeout(() => {
                warning.classList.add('hidden')
            }, 3000)
        } else {
            warningMobile.classList.remove('hidden')
            warningMobile.textContent = 'Internal Error!'
            setTimeout(() => {
                warningMobile.classList.add('hidden')
            }, 3000)
        }
    }

    const responsePlaylist = await fetch(`/playlists-select/${idUserConnected}/?playlist=${playlistSelect}`);
    const playlist = await responsePlaylist.json();

    videoData = playlist.videos;
    videoDataShuffled = [...videoData];

    if (screenWidth >= 1360) {
        containerPlaylist.innerHTML = "";
        containerItemsSearch.innerHTML = "";
        containerItemsFavorite.innerHTML = "";
        containerItemsHistoric.innerHTML = "";
    } else {
        containerPlaylistMobile.innerHTML = "";
        containerItemsSearchMobile.innerHTML = "";
        containerItemsFavoriteMobile.innerHTML = "";
        containerItemsHistoricMobile.innerHTML = "";
    }

    indexAudio = 0;
    audioGlobal.pause()
    if (screenWidth >= 1360) {
        audioControllerPlay.name = 'play-circle';
        videoAnimationStatus.classList.remove('run');
    } else {
        audioControllerPlayMobile.name = 'play-circle';
    }
    audioControllerPlayToggle = true;

    if (screenWidth >= 1360) {
        shuffleIcon.classList.remove('active');
    } else {
        shuffleIconMobile.classList.remove('active');
    }
    shuffleToggleControl = true;
    titlePlaylist = "";

    allVideoValueSetters()
    generatorContainerPlaylistData();
    generatorContainerPlaylistDataPlay();
    manageEmptyPlaylist()
    if (emptyPlaylist) return
    generatorContainerSearchData()
    generatorContainerSearchDataPlay()
    generatorContainerFavoriteData()
    generatorContainerFavoriteDataPlay()
    generatorContainerHistoricData()
    generatorContainerHistoricDataPlay()

    indexAudioId = videoDataShuffled[indexAudio]._id;
    indexAudioGender = videoDataShuffled[indexAudio].gender;
    setVideoPlayTag();
    refreshFavorite();
    manageHistoric();
    audioControllerPlayAudioAndVideo();
    refreshUserWithNewPlaylist()
    setManagementSystem()
}

async function videoListingService() {
    const idUserConnected = getCookie("user")

    const responseUser = await fetch(`/users/${idUserConnected}`);
    const user = await responseUser.json();

    userData = user.user;
    userData.myPlaylists.reverse()

    const responsePlaylists = await fetch(`/playlists/${idUserConnected}`);
    const playlists = await responsePlaylists.json();

    const responseVideos = await fetch(`/playlists-select/${idUserConnected}/?playlist=${userData.lastAccessedPlaylist}`);
    const videos = await responseVideos.json();

    const responseAllVideos = await fetch("/videos");
    const allVideos = await responseAllVideos.json();

    allVideoData = allVideos.videos
    videoData = videos.videos;
    playlistData = playlists.playlists;

    videoDataShuffled = [...videoData];

    inicia();
}

videoListingService();