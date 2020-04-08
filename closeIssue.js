const got = require('got')

const { NUMBER, GITHUB_TOKEN } = process.env

got(`https://api.github.com/repos/dd-center/vdb/pulls/${NUMBER}`).json()
  .then(async ({ head: { label }, user: { login } }) => {
    if (login === 'github-actions[bot]' && label.startsWith('dd-center:submit-')) {
      const issueNumber = Number(label.replace('dd-center:submit-', ''))
      await got.post(`https://api.github.com/repos/dd-center/vdb//issues/${issueNumber}/comments`, {
        json: {
          body: `closing since #${NUMBER} is closed`,
        },
        headers: {
          authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      })
      await got.patch(`https://api.github.com/repos/dd-center/vdb/issues/${issueNumber}`, {
        json: {
          state: 'closed',
        },
        headers: {
          authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      })
    } else {
      console.log('nah')
    }
  })
