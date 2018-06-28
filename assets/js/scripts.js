$(function(){
    var newsletterData = [
        {
            category: 'Arts and Culture',
            items: [
                {
                    title: 'Hayy: a major new centre for the creative industries in Saudi Arabia',
                    imageUrl: 'assets/images/arts-culture-001.jpg',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: 'Art Jameel continues to build to a strong infrastructure around which the arts can thrive within Saudi Arabia with the announcement that a new ...'
                },
                {
                    title: "Art Jameel and the Delfina foundation collaborate on bicontinental art exhibition",
                    imageUrl: '',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: ''
                },
                {
                    title: "'Saudi Seen' photography exhibition inspires a new generation of image-makers",
                    imageUrl: '',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: ''
                },
                {
                    title: 'Jameel Prize 5 shortlist announced',
                    imageUrl: '',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: ''
                }
            ]
        },
        {
            category: 'Job Creation',
            items: [
                {
                    title: 'Bab Rizq Jameel Recruitment provides more than 50,000 employment opportunities in 2017',
                    imageUrl: 'assets/images/job-creation-001.jpg',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: 'Bab Rizq Jameel Recuritment (BRJR) has a strong reputation for building diverse economic opportunity, creating and filling new employment ...'
                }
            ]
        },
        {
            category: 'Education and Training',
            items: [
                {
                    title: 'MIT Enterprise Forum judging panel narrows the field with 45 applicants through to the semi-finals of Saudi competition',
                    imageUrl: 'assets/images/education-training-001.jpg',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: 'Experience judging panel of 60 business experts and academics from Saudi Arabia and the Arab world have selected the 45 best appl ...'
                },
                {
                    title: '84 teams from 14 Arab countries qualify for the semi-finals of 11th edition of MIT Enterprise',
                    imageUrl: '',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: ''
                },
                {
                    title: 'Forum Arab Startup Competition',
                    imageUrl: '',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: ''
                },
                {
                    title: 'Transformin Education around the World',
                    imageUrl: '',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: ''
                },
                {
                    title: 'MIT President Rafael Reif discusses Abdul Latif Jameel World Education Lab (J-WEL)',
                    imageUrl: '',
                    videoUrl: 'assets/images/mit-j-well.jpg',
                    additionalInfo: 'Jan 25, 2018',
                    excerpt: ''
                },
                {
                    title: '2nd edition of the MIT Enterprise Forum Saudi Startup Competition',
                    imageUrl: '',
                    videoUrl: 'assets/images/mit-enterprise-forum.jpg',
                    additionalInfo: 'Jan 25, 2018',
                    excerpt: ''
                }
            ]
        },
        {
            category: 'Global Development',
            items: [
                {
                    title: 'Good governance and violent crime to be tackled by Abdul Latif Jameel Poverty action Lab research in collaboration with the UK government',
                    imageUrl: '',
                    videoUrl: 'assets/images/global-development.jpg',
                    additionalInfo: '3 min read',
                    excerpt: 'The Abdul Latif Jameel Poverty Action Lab (J-PAL) has been providing vital research into methodologies and solutions to tackle some of the ...'
                },
                {
                    title: 'J_WAFS works to ensure food and water security for generations to come',
                    imageUrl: '',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: ''
                }
            ]
        }
    ]
    var achievementData = [
        {
            year: 2017,
            items: [
                {
                    amount: "51,000",
                    symbol: "",
                    organisation: "Bab Rizq Jameel Recruitment",
                    description: "more than 51,000 job opportunities in 2017"
                },
                {
                    amount: "6,000",
                    symbol: "",
                    organisation: "Bab Rizq Jameel Microfinance",
                    description: "more than 6,000 job opportunities in 2017"
                },
                {
                    amount: "300",
                    symbol: "mln",
                    organisation: "Abdul Latif Jameel Poverty Action Lab (J-PAL)",
                    description: "over 300 million have been reached"
                },
                {
                    amount: "7,000",
                    symbol: "",
                    organisation: "Abdul Latif Jameel Hospital",
                    description: "had served more than 7000 patients in 2017"
                },
                {
                    amount: "180",
                    symbol: "",
                    organisation: "Abdul Latif Jameel Toyota Endowed Scholarship",
                    description: "we had helped 180 students from 27 countries to study at MIT since establishment"
                }
            ]
        }
    ]
    
    function buildAchievements(achievementData) {
        var achievementSelector = '#js-achievement';
        var achievementHTML = '<div class="row">';
        var achievementDataLength = achievementData.length;
        for (var k = 0; k < achievementDataLength; k++) {
            achievementHTML += '<h3 class="achievement__title">' + achievementData[k].year + ' Achievements</h3>';
            var achievementItems = achievementData[k].items;
            var achievementItemsLength = achievementData[k].items.length;

            for (var i = 0; i < achievementItemsLength; i++) {
                var item = achievementItems[i];
                achievementHTML += (i === achievementItemsLength - 1) ? '<div class="col-xs-12">' : '<div class="col-xs-12 col-sm-6">';
                achievementHTML += '<div class = "achievement__item">';
                achievementHTML += '<h4 class="achievement__amount">' + item.amount;
                achievementHTML += '<sup> ' + item.symbol + '</sup>';
                achievementHTML += '</h4>';
                achievementHTML += (i === achievementItemsLength - 1) ? '<p class="achievement__description achievement__description--last">' : '<p class="achievement__description">';
                achievementHTML += '<span class="achievement__organisation">' + item.organisation + ': </span>';
                achievementHTML += '<span class="achievement__message">' + item.description + '</span>';
                achievementHTML += '</p></div></div>';
            }
        }
        achievementHTML += '</div>';

        $(achievementSelector).html(achievementHTML);
    }

    function buildNewsletterItems(newsletterData) {
        var newsletterSelector = '#js-newsletter';
        var newsletterHTML = '<div class="row"><div class="col-md-12">';
        for (var i = 0; i < newsletterData.length; i++) {
            var newsItem = newsletterData[i];
            newsletterHTML += '<div class="newsletter__section">';
            newsletterHTML += '<h3 class="newsletter__section-heading">' + newsItem.category + '</h3>';
            newsletterHTML += '<hr class="newsletter__section-divider"></div>';
            var currentNewsItemLength = newsItem.items.length;
            for (var j = 0; j < currentNewsItemLength; j++) {
                var childItem = newsItem.items[j];
                newsletterHTML += (j === currentNewsItemLength - 1) ? '<div class="newsletter__item newsletter__item--last">' : '<div class="newsletter__item">';
                newsletterHTML += '<h4 class="newsletter__heading">' + childItem.title + '</h4>';
                if (childItem && childItem.imageUrl) {
                    newsletterHTML += '<img src="'+ childItem.imageUrl +'" alt="' + childItem.title + '" class="img-responsive newsletter__media newsletter__image" />';
                } else if (childItem &&  childItem.videoUrl) {
                    newsletterHTML += '<img src="'+ childItem.videoUrl +'" alt="' + childItem.title + '" class="img-responsive newsletter__media newsletter__image" />';
                }
                newsletterHTML += '<div class="newsletter__extra-info">';
                newsletterHTML += '<div class="newsletter__additional-info mr-20">' + childItem.additionalInfo + '</div>';
                newsletterHTML += '<div class="newsletter__socials"> <a class="text-muted" href="#" ><i class="fa fa-twitter mr-20"></i></a> <a class="text-muted" href="#" ><i class="fa fa-facebook mr-20"></i> </a></div>';
                if (j === 0) {
                    newsletterHTML += '<div class="clearfix"></div>';
                    newsletterHTML += (childItem.videoUrl) ? '' : '<div class="newsletter__excerpt"> ' + childItem.excerpt;
                    newsletterHTML += (childItem.videoUrl) ? '' : ' <span><i class="fa fa-long-arrow-right text-primary"></i> </span></div>';
                } else {
                    newsletterHTML += (childItem.videoUrl) ? '' : '<span><i class="fa fa-long-arrow-right text-primary"></i> </span>';
                }
                newsletterHTML += '</div><div class="clearfix"></div>';
                newsletterHTML += (j === currentNewsItemLength - 1) ? '' : '<hr class="newsletter__item-divider" />';
                newsletterHTML += '</div>';
            }
        }
        newsletterHTML += '</div></div>';
        $(newsletterSelector).html(newsletterHTML);
        
    }
    
    buildNewsletterItems(newsletterData);            
    buildAchievements(achievementData);            

}());