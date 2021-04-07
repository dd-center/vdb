const github = require('@actions/github')

const { NUMBER, GITHUB_TOKEN } = process.env

const client = github.getOctokit(GITHUB_TOKEN)

// graphql code from from https://github.com/alexwilson/enable-github-automerge-action/blob/bd3f7322b319420f2ade75d057a74a535baf7eaf/src/enable-github-automerge-action.ts#L113-L141

client.graphql(`
  mutation(
    $pullRequestId: ID!
  ) {
      enablePullRequestAutoMerge(input: {
        pullRequestId: $NUMBER
      }) {}
  }`, { NUMBER })
