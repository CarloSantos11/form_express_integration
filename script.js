document.getElementById('signupform').addEventListener("submit", handleUserChanges);

let user = {
  "username": "",
  "role": "",
  "languages": [],
  "socialLinksArray": []
}

function updateUser(user) {
  let username = document.querySelector('#username input').value;
  let role = Array.from(document.querySelectorAll('[name="role"]')).filter(x => x.checked)[0].value;
  let languagesArray = Array
    .from(document.querySelectorAll('[name="languages"]'))
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value)
  let socialLinksArray = Array.from(document.querySelectorAll('[name="social_links')).filter(x => x.value != "");
  // let postInfo = document.querySelector('.post')

  socialLinksArray = socialLinksArray.map(textField => textField.value);

  let _user = user

  _user.username = username || user.username;
  _user.role = role || user.role;
  _user.languages = languagesArray || user.languages;
  _user.socialLinksArray = socialLinksArray || user.socialLinksArray;

  return _user
}

function updateUserUI (user) {
  console.log(user);
  console.log(user.languagesArray);
  document.querySelector('#post_username').innerHTML = user.username;
  document.querySelector('#post_role').innerHTML = user.role;
  document.querySelector('#post_languages').innerHTML = user.languages;
  // document.querySelector('#post_social_links').innerHTML = user.socialLinksArray;

  displaySocialMedia();
}

function handleUserChanges (e) {
  e.preventDefault();
  _user = updateUser(user);
  console.log(_user)
  updateUserUI(_user);
  user = _user
}

function displaySocialMedia() {
  // add the icon dynamically 
  // and have the icon have an href of the captured field
  let postInfo = document.querySelector('.post')
  let nodelistOfSocialLinks = document.getElementsByName("social_links");
  // return nodelistOfSocialLinks;
  // let github = document.querySelector('#d_github');
  // let discord = document.querySelector('#d_discord');;
  // let instagram = document.querySelector('#d_instagram');
  // let slack = document.querySelector('#d_slack');
  let icon = "";
  let present = false;

  // if this social field is not empty
  // remove the hidden field on the related social media field on the right

  // when there are contents within remove the hidden tag
  nodelistOfSocialLinks.forEach(socialField => {
    if (socialField.value.length > 0) {
      present = true;
      // github.classList.remove("hidden");
      icon = document.querySelector(`#${"d_"+ socialField.id}`)
      icon.classList.remove("hidden");
      let linkUrl = socialField.value;
      // console.log("d_" + socialField.id);
      icon.href = linkUrl;

    } else {
      console.log("Nothing Here")
    }
    console.log(socialField.value.length);
    console.log(socialField.id)
    console.log(socialField.value)
  })

  // What I'm thinking is matching the id with regular expressions
  // or i can concatenate what i would have as the id of the display element

  // Select the d_github id and remove the classname hidden
   if (postInfo.classList.contains('hidden')) {
    postInfo.classList.remove('hidden');
  }
}