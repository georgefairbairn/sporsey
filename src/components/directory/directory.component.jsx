import React from "react";
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "football",
          imageUrl:
            "http://static.nfl.com/static/content/public/pg-photo/2015/05/26/0ap3000000494154/15-maryland-s-star-spangled-banner-helmets_pg_600.jpg",
          id: 1
        },
        {
          title: "soccer",
          imageUrl:
            "https://thumblr.uniid.it/blog_component/61636/20fbed293457.jpg",
          id: 2
        },
        {
          title: "ice hockey",
          imageUrl:
            "https://i.cbc.ca/1.3250417.1443629608!/fileImage/httpImage/image.JPG_gen/derivatives/4x3_1180/hockey-jerseys-chris-delorme.JPG",
          id: 3
        },
        {
          title: "rugby",
          imageUrl:
            "https://media-assets-01.thedrum.com/cache/images/thedrum-prod/public-news-tmp-77017-canterbury-rwc_2015_shirt--default--1280.jpg",
          size: 'large',
          id: 4
        },
        {
          title: "cricket",
          imageUrl:
            "https://sportstar.thehindu.com/cricket/article27267688.ece/ALTERNATES/LANDSCAPE_1200/GettyImages-1146184245jpg",
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
      return (
        <div className="directory-menu">
            {
                this.state.sections.map(({ title, imageUrl, size, id }) => 
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                )
            }
        </div>
      );
  }
}

export default Directory;
