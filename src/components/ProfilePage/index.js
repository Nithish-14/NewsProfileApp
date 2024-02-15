import React, {useState, useContext} from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import ArticleCard from '../ArticleCard'
import ThemeContext from './../../ThemeContext';
import './index.css'

const articles = [
    {
      "id": 1,
      "title": "Scientists Discover New Species of Giant Squid in Pacific Ocean",
      "summary": "Researchers have identified a previously unknown species of giant squid off the coast of Hawaii. The creature, named 'Pacific Kraken,' is estimated to be up to 30 feet long.",
      "content": "Scientists conducting deep-sea exploration off the coast of Hawaii have made a groundbreaking discovery: a new species of giant squid. This elusive creature, dubbed the 'Pacific Kraken,' has long been rumored by fishermen and sailors, but until now, it has eluded scientific classification. Measuring up to 30 feet in length, the Pacific Kraken possesses distinctive features, including bioluminescent markings and oversized tentacles. Researchers believe that further study of this species could provide valuable insights into the ecology of deep-sea environments.",
      "author": "Dr. Alexandra Rodriguez",
      "published_date": "12 hours ago",
      "image_url": "https://neurosciencenews.com/files/2024/01/handwriting-learning-neuroscience-1170x585.jpg"
    },
    {
      "id": 2,
      "title": "SpaceX Successfully Launches Crewed Mission to Mars",
      "summary": "SpaceX's latest mission to Mars, carrying a crew of astronauts, has successfully launched from Cape Canaveral. The mission aims to establish a permanent human presence on the red planet.",
      "content": "In a historic achievement, SpaceX has launched its first crewed mission to Mars. The spacecraft, named 'Red Horizon,' departed from Cape Canaveral early this morning, carrying a team of experienced astronauts. The mission, funded by NASA and private investors, represents a significant step towards the long-term goal of establishing a sustainable human settlement on Mars. SpaceX CEO Elon Musk expressed his excitement about the mission's potential to inspire future generations and expand humanity's presence beyond Earth.",
      "author": "John Smith",
      "published_date": "12 hours ago",
      "image_url": "https://neurosciencenews.com/files/2024/01/handwriting-learning-neuroscience-1170x585.jpg"
    },
    {
      "id": 3,
      "title": "Global Summit Addresses Climate Change Crisis",
      "summary": "World leaders gather in Geneva for a landmark summit on climate change, pledging to take urgent action to combat the growing environmental crisis.",
      "content": "Representatives from over 150 countries convened in Geneva this week for a critical summit on climate change. Amidst mounting scientific evidence of the worsening environmental crisis, leaders pledged to prioritize sustainability and reduce greenhouse gas emissions. Key agreements include ambitious targets for renewable energy adoption, carbon neutrality, and measures to protect vulnerable ecosystems. The summit concluded with a call for global cooperation and solidarity in addressing one of the most pressing challenges of our time.",
      "author": "Emily Jones",
      "published_date": "12 hours ago",
      "image_url": "https://neurosciencenews.com/files/2024/01/handwriting-learning-neuroscience-1170x585.jpg"
    },
    {
        "id": 4,
        "title": "Global Summit Addresses Climate Change Crisis",
        "summary": "World leaders gather in Geneva for a landmark summit on climate change, pledging to take urgent action to combat the growing environmental crisis.",
        "content": "Representatives from over 150 countries convened in Geneva this week for a critical summit on climate change. Amidst mounting scientific evidence of the worsening environmental crisis, leaders pledged to prioritize sustainability and reduce greenhouse gas emissions. Key agreements include ambitious targets for renewable energy adoption, carbon neutrality, and measures to protect vulnerable ecosystems. The summit concluded with a call for global cooperation and solidarity in addressing one of the most pressing challenges of our time.",
        "author": "Emily Jones",
        "published_date": "12 hours ago",
        "image_url": "https://neurosciencenews.com/files/2024/01/handwriting-learning-neuroscience-1170x585.jpg"
    },
    {
        "id": 5,
        "title": "Global Summit Addresses Climate Change Crisis",
        "summary": "World leaders gather in Geneva for a landmark summit on climate change, pledging to take urgent action to combat the growing environmental crisis.",
        "content": "Representatives from over 150 countries convened in Geneva this week for a critical summit on climate change. Amidst mounting scientific evidence of the worsening environmental crisis, leaders pledged to prioritize sustainability and reduce greenhouse gas emissions. Key agreements include ambitious targets for renewable energy adoption, carbon neutrality, and measures to protect vulnerable ecosystems. The summit concluded with a call for global cooperation and solidarity in addressing one of the most pressing challenges of our time.",
        "author": "Emily Jones",
        "published_date": "12 hours ago",
        "image_url": "https://neurosciencenews.com/files/2024/01/handwriting-learning-neuroscience-1170x585.jpg"
    },
    {
        "id": 6,
        "title": "Global Summit Addresses Climate Change Crisis",
        "summary": "World leaders gather in Geneva for a landmark summit on climate change, pledging to take urgent action to combat the growing environmental crisis.",
        "content": "Representatives from over 150 countries convened in Geneva this week for a critical summit on climate change. Amidst mounting scientific evidence of the worsening environmental crisis, leaders pledged to prioritize sustainability and reduce greenhouse gas emissions. Key agreements include ambitious targets for renewable energy adoption, carbon neutrality, and measures to protect vulnerable ecosystems. The summit concluded with a call for global cooperation and solidarity in addressing one of the most pressing challenges of our time.",
        "author": "Emily Jones",
        "published_date": "12 hours ago",
        "image_url": "https://neurosciencenews.com/files/2024/01/handwriting-learning-neuroscience-1170x585.jpg"
    },
    {
        "id": 7,
        "title": "Global Summit Addresses Climate Change Crisis",
        "summary": "World leaders gather in Geneva for a landmark summit on climate change, pledging to take urgent action to combat the growing environmental crisis.",
        "content": "Representatives from over 150 countries convened in Geneva this week for a critical summit on climate change. Amidst mounting scientific evidence of the worsening environmental crisis, leaders pledged to prioritize sustainability and reduce greenhouse gas emissions. Key agreements include ambitious targets for renewable energy adoption, carbon neutrality, and measures to protect vulnerable ecosystems. The summit concluded with a call for global cooperation and solidarity in addressing one of the most pressing challenges of our time.",
        "author": "Emily Jones",
        "published_date": "12 hours ago",
        "image_url": "https://neurosciencenews.com/files/2024/01/handwriting-learning-neuroscience-1170x585.jpg"
    },
    {
        "id": 8,
        "title": "Global Summit Addresses Climate Change Crisis",
        "summary": "World leaders gather in Geneva for a landmark summit on climate change, pledging to take urgent action to combat the growing environmental crisis.",
        "content": "Representatives from over 150 countries convened in Geneva this week for a critical summit on climate change. Amidst mounting scientific evidence of the worsening environmental crisis, leaders pledged to prioritize sustainability and reduce greenhouse gas emissions. Key agreements include ambitious targets for renewable energy adoption, carbon neutrality, and measures to protect vulnerable ecosystems. The summit concluded with a call for global cooperation and solidarity in addressing one of the most pressing challenges of our time.",
        "author": "Emily Jones",
        "published_date": "12 hours ago",
        "image_url": "https://neurosciencenews.com/files/2024/01/handwriting-learning-neuroscience-1170x585.jpg"
    },
    {
        "id": 9,
        "title": "Global Summit Addresses Climate Change Crisis",
        "summary": "World leaders gather in Geneva for a landmark summit on climate change, pledging to take urgent action to combat the growing environmental crisis.",
        "content": "Representatives from over 150 countries convened in Geneva this week for a critical summit on climate change. Amidst mounting scientific evidence of the worsening environmental crisis, leaders pledged to prioritize sustainability and reduce greenhouse gas emissions. Key agreements include ambitious targets for renewable energy adoption, carbon neutrality, and measures to protect vulnerable ecosystems. The summit concluded with a call for global cooperation and solidarity in addressing one of the most pressing challenges of our time.",
        "author": "Emily Jones",
        "published_date": "12 hours ago",
        "image_url": "https://neurosciencenews.com/files/2024/01/handwriting-learning-neuroscience-1170x585.jpg"
    },
    {
        "id": 10,
        "title": "Global Summit Addresses Climate Change Crisis",
        "summary": "World leaders gather in Geneva for a landmark summit on climate change, pledging to take urgent action to combat the growing environmental crisis.",
        "content": "Representatives from over 150 countries convened in Geneva this week for a critical summit on climate change. Amidst mounting scientific evidence of the worsening environmental crisis, leaders pledged to prioritize sustainability and reduce greenhouse gas emissions. Key agreements include ambitious targets for renewable energy adoption, carbon neutrality, and measures to protect vulnerable ecosystems. The summit concluded with a call for global cooperation and solidarity in addressing one of the most pressing challenges of our time.",
        "author": "Emily Jones",
        "published_date": "12 hours ago",
        "image_url": "https://neurosciencenews.com/files/2024/01/handwriting-learning-neuroscience-1170x585.jpg"
    },
    {
        "id": 11,
        "title": "Global Summit Addresses Climate Change Crisis",
        "summary": "World leaders gather in Geneva for a landmark summit on climate change, pledging to take urgent action to combat the growing environmental crisis.",
        "content": "Representatives from over 150 countries convened in Geneva this week for a critical summit on climate change. Amidst mounting scientific evidence of the worsening environmental crisis, leaders pledged to prioritize sustainability and reduce greenhouse gas emissions. Key agreements include ambitious targets for renewable energy adoption, carbon neutrality, and measures to protect vulnerable ecosystems. The summit concluded with a call for global cooperation and solidarity in addressing one of the most pressing challenges of our time.",
        "author": "Emily Jones",
        "published_date": "12 hours ago",
        "image_url": "https://neurosciencenews.com/files/2024/01/handwriting-learning-neuroscience-1170x585.jpg"
    },
    {
        "id": 12,
        "title": "Global Summit Addresses Climate Change Crisis",
        "summary": "World leaders gather in Geneva for a landmark summit on climate change, pledging to take urgent action to combat the growing environmental crisis.",
        "content": "Representatives from over 150 countries convened in Geneva this week for a critical summit on climate change. Amidst mounting scientific evidence of the worsening environmental crisis, leaders pledged to prioritize sustainability and reduce greenhouse gas emissions. Key agreements include ambitious targets for renewable energy adoption, carbon neutrality, and measures to protect vulnerable ecosystems. The summit concluded with a call for global cooperation and solidarity in addressing one of the most pressing challenges of our time.",
        "author": "Emily Jones",
        "published_date": "12 hours ago",
        "image_url": "https://neurosciencenews.com/files/2024/01/handwriting-learning-neuroscience-1170x585.jpg"
    }
];


const EditPage = ({name, bio, updateFunc}) => {
    const [newName, updateName]   = useState(name);
    const [newBio, updateBio] = useState(bio);
    const {darkMode} = useContext(ThemeContext);

    const onClickSaveButton = () => {
        const newUserDetails = {
            name: newName, 
            short_bio: newBio
        }

        localStorage.setItem("userDetail", JSON.stringify(newUserDetails));
        updateFunc();
    }

    const onClickCloseButton = () => {
        updateFunc();
    }

    return (
        <div className="edit-view-container d-flex justify-content-center align-items-center">
            <div className={`edit-container ${!darkMode ? "light-mode-edit-container" : ""}`}>
                <div className="edit-page-close-container">
                    <button type="button" className={`${darkMode ? "edit-page-close-button" : "light-mode-edit-page-close-button"}`} onClick={onClickCloseButton}><IoClose color={darkMode ? "#ffffff" : "#000000"} size={30} /></button>
                    <p className={`edit-profile-para ${!darkMode ? "light-mode-edit-profile-para" : ""}`}>Edit profile</p>
                    <button type="button" className="edit-page-save-button" onClick={onClickSaveButton}>Save</button>
                </div>
                <div className="form-container">
                    <input value={newName} onChange={(e) => updateName(e.target.value)} type="text" placeholder="Name" className={`input-element ${!darkMode ? "light-mode-input-element" : ""}`} />
                    <textarea value={newBio} onChange={(e) => updateBio(e.target.value)} className={`input-element ${!darkMode ? "light-mode-input-element" : ""}`} placeholder="Bio" style={{marginBottom: '0px'}}></textarea>
                </div>
            </div>
        </div>
    )
}
  

const ProfilePage = () => {
    const [showEditPage, updateEditPage] = useState(false);
    const [activeTab, changeTab] = useState("published");
    const {darkMode} = useContext(ThemeContext);

    const userDetail = JSON.parse(localStorage.getItem("userDetail"));

    const onClickClose = () => {
        updateEditPage(false);
    }

    return (
        <div className={`container-fluid profile-page-container ${showEditPage ? "edit-page-popup" : ""}`}>
            <div className="row">
                <div className="col-12 profile-section">
                    {showEditPage && <EditPage name={userDetail.name} bio={userDetail.short_bio} updateFunc={onClickClose}  />}
                    <div className="profile-section-bg-container w-100">
                    </div>
                    <div className="profile-section-image-container w-100 d-flex flex-row justify-content-between align-items-center">
                        <div className="profile-image d-flex flex-row justify-content-center align-items-center">
                            <h1 className="profile-letter">J</h1>
                        </div>
                        <button type="button" className={`${!darkMode ? "light-mode-edit-profile-button" : "edit-profile-button"}`} onClick={() => updateEditPage(previous => !previous)}>Edit profile</button>
                    </div>
                    <div className="profile-section-user-details-container w-100">
                        <h1 className={`name-heading ${!darkMode ? "light-mode-name-heading" : ""}`}>{userDetail.name}</h1>
                        <p className={`username-para ${!darkMode ? "light-mode-name-heading" : ""}`}>@john_doe</p>
                        <p className={`bio-para ${!darkMode ? "light-mode-name-heading" : ""}`}>{userDetail.short_bio}</p>
                        <p className={`date-para ${!darkMode ? "light-mode-name-heading" : ""}`}><FaRegCalendarAlt style={{marginRight: '5px'}} />Joined February 2024</p>
                        <div className="follow-container d-flex flex-row align-items-center">
                            <p className={`follow-para ${!darkMode ? "light-mode-name-heading" : ""}`}><span className={`follow-count-span ${!darkMode ? "light-mode-name-heading" : ""}`}>0</span> Following</p>
                            <p className={`follow-para ${!darkMode ? "light-mode-name-heading" : ""}`}><span className={`follow-count-span ${!darkMode ? "light-mode-name-heading" : ""}`}>0</span> Followers</p>
                        </div>
                    </div>
                </div>
                <div className="profile-section-articles-container col-12">
                    <div className="tab-container container-fluid d-flex justify-content-around align-items-center">
                        <button type="button" className={`${!darkMode ? "light-mode-tab-button" : "tab-button"} ${activeTab === "published" ? "active-tab" : ""} ${!darkMode && activeTab === "published" ? "light-mode-active-tab" : ""}`} onClick={() => changeTab("published")}>Published</button>
                        <button type="button" className={`${!darkMode ? "light-mode-tab-button" : "tab-button"} ${activeTab === "likes" ? "active-tab" : ""} ${!darkMode && activeTab === "likes" ? "light-mode-active-tab" : ""}`} onClick={() => changeTab("likes")}>Likes</button>
                    </div>
                    <ul className="articles-container pt-3 container-fluid w-100 d-flex flex-row align-items-center flex-wrap">
                        {articles.map(each => <ArticleCard key={each.id} article={each} darkMode={darkMode} />)}
                    </ul>
                </div>
            </div>
        </div>
    )
    
}

export default ProfilePage