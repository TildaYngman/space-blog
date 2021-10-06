
  let linkShow = document.getElementById('link-display');
  const menuBtn = document.querySelector('.menu-btn');
  let menuOpen = false;


  menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
      menuBtn.classList.add('open'); //adds class of open and then the css styles the hamburgerbar
      menuOpen = true;
      linkShow.style.display='block'; //shows the links
    } else {
      menuBtn.classList.remove('open'); //removes class of open that style the hamburger bar
      menuOpen = false;
      linkShow.style.display='none'; //hides the links ex. på fel jag gjorde var att jag hade dispaly('none') och fick fel att det inte var en function.
    }
  });

  function createPreviewCard(card) { //Creates the thumbnail with the photo, title and a short text
    var wrapper = document.getElementById("postSummaries")
      wrapper.innerHTML +=
       `<div class="card-wrapper__card">
          <a href="../page/hp.html">
            <img src="${card.previewImage}" alt="image" />
          
          <div class="card-wrapper__content">
            <h3>${card.title}</h3>
            <p>
              ${card.shortSummary}
            </p>
          </a>
        </div>
       </div>`;
  };
  
  function populatePost(post) { //The content of the page of the post
    var wrapper = document.getElementById("postContent")
    wrapper.innerHTML +=
    `<h1>${post.title}</h1>
    <p>${post.shortSummary}</p>
    <div>${post.content}</div>`
    ;
  }
  
  function formatPost(post) { //picks attributes from the JSON object and renames them
    let formated = {
      id: post.id,
      title: post.title.rendered,
      previewImage: post._embedded["wp:featuredmedia"][0].source_url,
      shortSummary: post.excerpt.rendered,
      // content: post.content.rendered
    };
    return formated;
  }
  

  function getPosts() { //fetching the JSON file in wordpress
    fetch("http://localhost:8888/wp-json/wp/v2/posts?_embed") 
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          let formatedPosts = formatPost(data[i]);
          createPreviewCard(formatedPosts);
        }
      });
  }
  function getPostFromId() { //To make your post clickable and take you to another site.
    var id = JSON.parse(findQuery('id'));
  
  fetch(`http://localhost:8888/wp-json/wp/v2/posts/${id}?_embed`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data)
          populatePost(formatPost(data));
      });
  }