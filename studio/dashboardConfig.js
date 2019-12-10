export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5def46600e8d60742e24168d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-hyxxv1jj',
                  apiId: '18365f3e-6f22-4a0d-9916-c00dcec80c36'
                },
                {
                  buildHookId: '5def4660eebfc571dad0476b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-y52wuku4',
                  apiId: 'a68fd439-230e-4118-821f-0fea4de00b09'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/srigaurav1986/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-y52wuku4.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
