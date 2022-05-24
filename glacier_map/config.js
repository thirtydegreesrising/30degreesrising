var config = {
    style: 'mapbox://styles/ucfnhch/cl37fa2vr002114lamw4m6pyc',
    accessToken: 'pk.eyJ1IjoidWNmbmhjaCIsImEiOiJja3lrazVpdmkyNWl2MnZzZXB3ZDB3NHA3In0._zxeE9Xr4_NYgQIwWS9x3w',
    showMarkers: false,
    theme: 'dark',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'overall',
            alignment: 'right',
            title: 'Overall',
            image: '',
            description: 'Glacier rephotograph provides effective and objective evidence for visually comparing and assessing landscape changes over time. Scientific agency and volunteers contribute to the glacier rephotographs. Glacier rephotographs are usually conducted during Summer since bare ice and glacier fronts are exposed clearly without seasonal covering of snow. Here, photographs comparison and glacier boundaries for four representative galciers in Iceland, Svabard and Alaska are presented to glance how the climate change may impact on glaciers locally. Glacier boundary used here are from version 6 of the Randolph Glacier Inventory (RGI) provided by NSIDC.',
            location: {
                center: [-10, 65],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer:'glacier',
                opacity: 0,
            }],
            onChapterExit: []
        },
        {
            id: 'iceland',
            alignment: 'right',
            title: 'Iceland',
            image: '',
            description: 'The glaciers and ice caps cover 11% of the land area of the whole Iceland (around 11,400 km² out of the total area of 103,125 km²). Most of the Icelandic glaciers retreated rapidly during the warm decades from 1930 to 1960, slowing down as the climate cooled during the following decade, and started to advance after 1970. The rate of advance peaked in the 1980s, after which it slowed down until about 1990. As a consequence of rapid warming of the climate that has taken place since the mid-1980s, most glaciers in Iceland began to retreat after 1990, and by 2000 all monitored non-surge type glaciers in Iceland were retreating.',
            location: {
                center: [-12, 65],
                zoom: 5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer:'glacier',
                opacity: 0.8,
            }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'iceland-1',
            alignment: 'right',
            title: 'Iceland - Breiðamerkurjökull',
            image: 'Iceland.gif',
            description: 'Breiðamerkurjökull is the outlet glacier of Vatna Glacier and the Mountain-front glacier in the south of Vatna Glacier National Park, Iceland.These images record the decline of Breiðamerkurjökull between 1982 and now. Credit: National Land Survey of Iceland/Dr Kieran Baxter, University of Dundee',
            location: {
                center: [-16.08, 64.1],
                zoom: 9,
                pitch: 20,
                bearing: 40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer:'glacier',
                opacity: 0.8,
                },
                {
                layer:'glacier-highlight',
                opacity: 0.7,
            }
            ],
            onChapterExit: [
                
                {
                layer:'glacier-highlight',
                opacity: 0,
                }

            ]
        },

        {
            id: 'svabard',
            alignment: 'left',
            title: 'Svabard',
            image: '',
            description: 'Approximately 60% of Svabard (about 36,502 km²) is covered with glaciers. Affected by global warming, significant climate change in Svalbard has occurred - average temperature increased by 4 degrees Celsius, and by 7 degrees in winter since 1970.',
            location: {
                center: [12.3, 78.2],
                zoom: 4.8,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'glacier',
                    opacity: 0.8,
                }
            ],
            onChapterExit: [
                {
                }
            ]
        },

        {
            id: 'svabard-1',
            alignment: 'left',
            title: 'Svabard - Blomstrandbreen',
            image: 'Blomstrandbreen.gif',
            description: 'Blomstrandbreen, a glacier in the King\'s Bay area of Spitsbergen, has retreated approximately 2 km (1.2 mi) in the past 80 years. Since 1960 the average retreat of Blomstrandbreen has been about 35 m (115 ft) a year, and this average was enhanced due to an accelerated rate of retreat since 1995. Credit:B/W Image by Courtesy of Norwegian Polar Institute; Color Image by Christian Aslund/Greenpeace.',
            location: {
                center: [12.37, 79.065385],
                zoom: 8,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'glacier',
                    opacity: 0.8,
                    },
                    {
                    layer:'glacier-highlight',
                    opacity: 0.7,
                }
            ],
            onChapterExit: [
                {
                    layer:'glacier',
                    opacity: 0,
                },
                {
                    layer:'glacier-highlight',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'alaska',
            alignment: 'right',
            title: 'Alaska',
            image: '',
            description: '"A 2005 aerial survey of Alaskan coastal glaciers identified more than a dozen glaciers, many former tidewater and calving glaciers, including Grand Plateau, Alsek, Bear, and Excelsior Glaciers that are rapidly retreating.Of 2,000 glaciers observed, 99% are retreating." (Pelto, 2016)',
            location: {
                center: [-136, 60],
                zoom: 4.1,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'glacier',
                    opacity: 0.8,
                }
            ],
            onChapterExit: [
                {
                }
            ]
        },

        {
            id: 'alaska-1',
            alignment: 'right',
            title: 'Alaska - Muir',
            image: 'Muir.gif',
            description: 'Credit: B/W Image by William Osgood from American Geographical Society/World Data Center-A for Glaciology; Color Image by Molnia, Bruce F. from U.S. Geological Survey.',
            location: {
                center: [-136.30, 59.17830],
                zoom: 10,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'glacier',
                    opacity: 0.8,
                },
                {
                    layer:'glacier-highlight',
                    opacity: 0.7,
                }
            ],
            onChapterExit: [
                {
                    layer:'glacier-highlight',
                    opacity: 0,
                }
            ]
        },

        {
            id: 'alaska-2',
            alignment: 'right',
            title: 'Alaska - Lechner',
            image: 'Lechner.gif',
            description: 'Credit: 1990 Image by Tetreau, M. from Kenai Fjords National Park (U.S. National Park Service); 2018 Image by Collins, A. from Kenai Fjords National Park (U.S. National Park Service).',
            location: {
                center: [-149.6, 59.94361],
                zoom: 11,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'glacier',
                    opacity: 0.8,
                },               
                {
                    layer:'glacier-highlight',
                    opacity: 0.7,
                }
            ],
            onChapterExit: [
                {
                    layer:'glacier-highlight',
                    opacity: 0,
                }
            ]
        },

        {
            id: '',
            alignment: 'left',
            title: '',
            image: '',
            description: 'xxxxxxxxxxxxxxxxxx',
            location: {
                center: [-10, 65],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer:'glacier',
                opacity: 0,
            }],
            onChapterExit: []
        },


    ]
};