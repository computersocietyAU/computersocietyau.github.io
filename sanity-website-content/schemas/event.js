export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'date',
        title: 'Conducted on',
        type: 'datetime',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'blockContent',
      },
      {
        name: 'upcoming',
        title: 'Upcoming Event?',
        type: 'boolean',
      },
      {
        name: 'eventPics',
        title: 'Event Pictures',
        type: 'array',
        of: [{
            type: 'image',
            options: {
                hotspot: true,
            }
        }]
    }
    ],
  
    preview: {
      select: {
        title: 'title',
        media: 'mainImage',
      },
    //   prepare(selection) {
    //     const {author} = selection
    //     return Object.assign({}, selection, {
    //       subtitle: author && `by ${author}`,
    //     })
    //   },
    },
  }
  