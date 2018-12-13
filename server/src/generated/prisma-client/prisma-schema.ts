export const typeDefs = /* GraphQL */ `type AggregateSkill {
  count: Int!
}

type AggregateTeam {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateWorkspace {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createSkill(data: SkillCreateInput!): Skill!
  updateSkill(data: SkillUpdateInput!, where: SkillWhereUniqueInput!): Skill
  updateManySkills(data: SkillUpdateManyMutationInput!, where: SkillWhereInput): BatchPayload!
  upsertSkill(where: SkillWhereUniqueInput!, create: SkillCreateInput!, update: SkillUpdateInput!): Skill!
  deleteSkill(where: SkillWhereUniqueInput!): Skill
  deleteManySkills(where: SkillWhereInput): BatchPayload!
  createTeam(data: TeamCreateInput!): Team!
  updateTeam(data: TeamUpdateInput!, where: TeamWhereUniqueInput!): Team
  updateManyTeams(data: TeamUpdateManyMutationInput!, where: TeamWhereInput): BatchPayload!
  upsertTeam(where: TeamWhereUniqueInput!, create: TeamCreateInput!, update: TeamUpdateInput!): Team!
  deleteTeam(where: TeamWhereUniqueInput!): Team
  deleteManyTeams(where: TeamWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createWorkspace(data: WorkspaceCreateInput!): Workspace!
  updateWorkspace(data: WorkspaceUpdateInput!, where: WorkspaceWhereUniqueInput!): Workspace
  updateManyWorkspaces(data: WorkspaceUpdateManyMutationInput!, where: WorkspaceWhereInput): BatchPayload!
  upsertWorkspace(where: WorkspaceWhereUniqueInput!, create: WorkspaceCreateInput!, update: WorkspaceUpdateInput!): Workspace!
  deleteWorkspace(where: WorkspaceWhereUniqueInput!): Workspace
  deleteManyWorkspaces(where: WorkspaceWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  skill(where: SkillWhereUniqueInput!): Skill
  skills(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Skill]!
  skillsConnection(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SkillConnection!
  team(where: TeamWhereUniqueInput!): Team
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  teamsConnection(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  workspace(where: WorkspaceWhereUniqueInput!): Workspace
  workspaces(where: WorkspaceWhereInput, orderBy: WorkspaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Workspace]!
  workspacesConnection(where: WorkspaceWhereInput, orderBy: WorkspaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkspaceConnection!
  node(id: ID!): Node
}

type Skill {
  id: ID!
  name: String!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type SkillConnection {
  pageInfo: PageInfo!
  edges: [SkillEdge]!
  aggregate: AggregateSkill!
}

input SkillCreateInput {
  name: String!
  users: UserCreateManyWithoutSkillsInput
}

input SkillCreateManyWithoutUsersInput {
  create: [SkillCreateWithoutUsersInput!]
  connect: [SkillWhereUniqueInput!]
}

input SkillCreateWithoutUsersInput {
  name: String!
}

type SkillEdge {
  node: Skill!
  cursor: String!
}

enum SkillOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SkillPreviousValues {
  id: ID!
  name: String!
}

input SkillScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [SkillScalarWhereInput!]
  OR: [SkillScalarWhereInput!]
  NOT: [SkillScalarWhereInput!]
}

type SkillSubscriptionPayload {
  mutation: MutationType!
  node: Skill
  updatedFields: [String!]
  previousValues: SkillPreviousValues
}

input SkillSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SkillWhereInput
  AND: [SkillSubscriptionWhereInput!]
  OR: [SkillSubscriptionWhereInput!]
  NOT: [SkillSubscriptionWhereInput!]
}

input SkillUpdateInput {
  name: String
  users: UserUpdateManyWithoutSkillsInput
}

input SkillUpdateManyDataInput {
  name: String
}

input SkillUpdateManyMutationInput {
  name: String
}

input SkillUpdateManyWithoutUsersInput {
  create: [SkillCreateWithoutUsersInput!]
  delete: [SkillWhereUniqueInput!]
  connect: [SkillWhereUniqueInput!]
  disconnect: [SkillWhereUniqueInput!]
  update: [SkillUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [SkillUpsertWithWhereUniqueWithoutUsersInput!]
  deleteMany: [SkillScalarWhereInput!]
  updateMany: [SkillUpdateManyWithWhereNestedInput!]
}

input SkillUpdateManyWithWhereNestedInput {
  where: SkillScalarWhereInput!
  data: SkillUpdateManyDataInput!
}

input SkillUpdateWithoutUsersDataInput {
  name: String
}

input SkillUpdateWithWhereUniqueWithoutUsersInput {
  where: SkillWhereUniqueInput!
  data: SkillUpdateWithoutUsersDataInput!
}

input SkillUpsertWithWhereUniqueWithoutUsersInput {
  where: SkillWhereUniqueInput!
  update: SkillUpdateWithoutUsersDataInput!
  create: SkillCreateWithoutUsersInput!
}

input SkillWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  AND: [SkillWhereInput!]
  OR: [SkillWhereInput!]
  NOT: [SkillWhereInput!]
}

input SkillWhereUniqueInput {
  id: ID
  name: String
}

type Subscription {
  skill(where: SkillSubscriptionWhereInput): SkillSubscriptionPayload
  team(where: TeamSubscriptionWhereInput): TeamSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  workspace(where: WorkspaceSubscriptionWhereInput): WorkspaceSubscriptionPayload
}

type Team {
  id: ID!
  name: String!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  lead: User!
  workspace: Workspace!
  dateRange: String
}

type TeamConnection {
  pageInfo: PageInfo!
  edges: [TeamEdge]!
  aggregate: AggregateTeam!
}

input TeamCreateInput {
  name: String!
  users: UserCreateManyWithoutTeamsInput
  lead: UserCreateOneWithoutLedTeamsInput!
  workspace: WorkspaceCreateOneWithoutTeamsInput!
  dateRange: String
}

input TeamCreateManyWithoutLeadInput {
  create: [TeamCreateWithoutLeadInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateManyWithoutUsersInput {
  create: [TeamCreateWithoutUsersInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateManyWithoutWorkspaceInput {
  create: [TeamCreateWithoutWorkspaceInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateWithoutLeadInput {
  name: String!
  users: UserCreateManyWithoutTeamsInput
  workspace: WorkspaceCreateOneWithoutTeamsInput!
  dateRange: String
}

input TeamCreateWithoutUsersInput {
  name: String!
  lead: UserCreateOneWithoutLedTeamsInput!
  workspace: WorkspaceCreateOneWithoutTeamsInput!
  dateRange: String
}

input TeamCreateWithoutWorkspaceInput {
  name: String!
  users: UserCreateManyWithoutTeamsInput
  lead: UserCreateOneWithoutLedTeamsInput!
  dateRange: String
}

type TeamEdge {
  node: Team!
  cursor: String!
}

enum TeamOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  dateRange_ASC
  dateRange_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TeamPreviousValues {
  id: ID!
  name: String!
  dateRange: String
}

input TeamScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  dateRange: String
  dateRange_not: String
  dateRange_in: [String!]
  dateRange_not_in: [String!]
  dateRange_lt: String
  dateRange_lte: String
  dateRange_gt: String
  dateRange_gte: String
  dateRange_contains: String
  dateRange_not_contains: String
  dateRange_starts_with: String
  dateRange_not_starts_with: String
  dateRange_ends_with: String
  dateRange_not_ends_with: String
  AND: [TeamScalarWhereInput!]
  OR: [TeamScalarWhereInput!]
  NOT: [TeamScalarWhereInput!]
}

type TeamSubscriptionPayload {
  mutation: MutationType!
  node: Team
  updatedFields: [String!]
  previousValues: TeamPreviousValues
}

input TeamSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TeamWhereInput
  AND: [TeamSubscriptionWhereInput!]
  OR: [TeamSubscriptionWhereInput!]
  NOT: [TeamSubscriptionWhereInput!]
}

input TeamUpdateInput {
  name: String
  users: UserUpdateManyWithoutTeamsInput
  lead: UserUpdateOneRequiredWithoutLedTeamsInput
  workspace: WorkspaceUpdateOneRequiredWithoutTeamsInput
  dateRange: String
}

input TeamUpdateManyDataInput {
  name: String
  dateRange: String
}

input TeamUpdateManyMutationInput {
  name: String
  dateRange: String
}

input TeamUpdateManyWithoutLeadInput {
  create: [TeamCreateWithoutLeadInput!]
  delete: [TeamWhereUniqueInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutLeadInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutLeadInput!]
  deleteMany: [TeamScalarWhereInput!]
  updateMany: [TeamUpdateManyWithWhereNestedInput!]
}

input TeamUpdateManyWithoutUsersInput {
  create: [TeamCreateWithoutUsersInput!]
  delete: [TeamWhereUniqueInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutUsersInput!]
  deleteMany: [TeamScalarWhereInput!]
  updateMany: [TeamUpdateManyWithWhereNestedInput!]
}

input TeamUpdateManyWithoutWorkspaceInput {
  create: [TeamCreateWithoutWorkspaceInput!]
  delete: [TeamWhereUniqueInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutWorkspaceInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutWorkspaceInput!]
  deleteMany: [TeamScalarWhereInput!]
  updateMany: [TeamUpdateManyWithWhereNestedInput!]
}

input TeamUpdateManyWithWhereNestedInput {
  where: TeamScalarWhereInput!
  data: TeamUpdateManyDataInput!
}

input TeamUpdateWithoutLeadDataInput {
  name: String
  users: UserUpdateManyWithoutTeamsInput
  workspace: WorkspaceUpdateOneRequiredWithoutTeamsInput
  dateRange: String
}

input TeamUpdateWithoutUsersDataInput {
  name: String
  lead: UserUpdateOneRequiredWithoutLedTeamsInput
  workspace: WorkspaceUpdateOneRequiredWithoutTeamsInput
  dateRange: String
}

input TeamUpdateWithoutWorkspaceDataInput {
  name: String
  users: UserUpdateManyWithoutTeamsInput
  lead: UserUpdateOneRequiredWithoutLedTeamsInput
  dateRange: String
}

input TeamUpdateWithWhereUniqueWithoutLeadInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutLeadDataInput!
}

input TeamUpdateWithWhereUniqueWithoutUsersInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutUsersDataInput!
}

input TeamUpdateWithWhereUniqueWithoutWorkspaceInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutWorkspaceDataInput!
}

input TeamUpsertWithWhereUniqueWithoutLeadInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutLeadDataInput!
  create: TeamCreateWithoutLeadInput!
}

input TeamUpsertWithWhereUniqueWithoutUsersInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutUsersDataInput!
  create: TeamCreateWithoutUsersInput!
}

input TeamUpsertWithWhereUniqueWithoutWorkspaceInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutWorkspaceDataInput!
  create: TeamCreateWithoutWorkspaceInput!
}

input TeamWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  lead: UserWhereInput
  workspace: WorkspaceWhereInput
  dateRange: String
  dateRange_not: String
  dateRange_in: [String!]
  dateRange_not_in: [String!]
  dateRange_lt: String
  dateRange_lte: String
  dateRange_gt: String
  dateRange_gte: String
  dateRange_contains: String
  dateRange_not_contains: String
  dateRange_starts_with: String
  dateRange_not_starts_with: String
  dateRange_ends_with: String
  dateRange_not_ends_with: String
  AND: [TeamWhereInput!]
  OR: [TeamWhereInput!]
  NOT: [TeamWhereInput!]
}

input TeamWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  email: String!
  workspaces(where: WorkspaceWhereInput, orderBy: WorkspaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Workspace!]
  ownedWorkspaces(where: WorkspaceWhereInput, orderBy: WorkspaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Workspace!]
  skills(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Skill!]
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
  ledTeams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  workspaces: WorkspaceCreateManyWithoutUsersInput
  ownedWorkspaces: WorkspaceCreateManyWithoutAdministratorInput
  skills: SkillCreateManyWithoutUsersInput
  teams: TeamCreateManyWithoutUsersInput
  ledTeams: TeamCreateManyWithoutLeadInput
}

input UserCreateManyWithoutSkillsInput {
  create: [UserCreateWithoutSkillsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutTeamsInput {
  create: [UserCreateWithoutTeamsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutWorkspacesInput {
  create: [UserCreateWithoutWorkspacesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutLedTeamsInput {
  create: UserCreateWithoutLedTeamsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwnedWorkspacesInput {
  create: UserCreateWithoutOwnedWorkspacesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutLedTeamsInput {
  email: String!
  workspaces: WorkspaceCreateManyWithoutUsersInput
  ownedWorkspaces: WorkspaceCreateManyWithoutAdministratorInput
  skills: SkillCreateManyWithoutUsersInput
  teams: TeamCreateManyWithoutUsersInput
}

input UserCreateWithoutOwnedWorkspacesInput {
  email: String!
  workspaces: WorkspaceCreateManyWithoutUsersInput
  skills: SkillCreateManyWithoutUsersInput
  teams: TeamCreateManyWithoutUsersInput
  ledTeams: TeamCreateManyWithoutLeadInput
}

input UserCreateWithoutSkillsInput {
  email: String!
  workspaces: WorkspaceCreateManyWithoutUsersInput
  ownedWorkspaces: WorkspaceCreateManyWithoutAdministratorInput
  teams: TeamCreateManyWithoutUsersInput
  ledTeams: TeamCreateManyWithoutLeadInput
}

input UserCreateWithoutTeamsInput {
  email: String!
  workspaces: WorkspaceCreateManyWithoutUsersInput
  ownedWorkspaces: WorkspaceCreateManyWithoutAdministratorInput
  skills: SkillCreateManyWithoutUsersInput
  ledTeams: TeamCreateManyWithoutLeadInput
}

input UserCreateWithoutWorkspacesInput {
  email: String!
  ownedWorkspaces: WorkspaceCreateManyWithoutAdministratorInput
  skills: SkillCreateManyWithoutUsersInput
  teams: TeamCreateManyWithoutUsersInput
  ledTeams: TeamCreateManyWithoutLeadInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  workspaces: WorkspaceUpdateManyWithoutUsersInput
  ownedWorkspaces: WorkspaceUpdateManyWithoutAdministratorInput
  skills: SkillUpdateManyWithoutUsersInput
  teams: TeamUpdateManyWithoutUsersInput
  ledTeams: TeamUpdateManyWithoutLeadInput
}

input UserUpdateManyDataInput {
  email: String
}

input UserUpdateManyMutationInput {
  email: String
}

input UserUpdateManyWithoutSkillsInput {
  create: [UserCreateWithoutSkillsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutSkillsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutSkillsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutTeamsInput {
  create: [UserCreateWithoutTeamsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutTeamsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutTeamsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutWorkspacesInput {
  create: [UserCreateWithoutWorkspacesInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutWorkspacesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutWorkspacesInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutLedTeamsInput {
  create: UserCreateWithoutLedTeamsInput
  update: UserUpdateWithoutLedTeamsDataInput
  upsert: UserUpsertWithoutLedTeamsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutOwnedWorkspacesInput {
  create: UserCreateWithoutOwnedWorkspacesInput
  update: UserUpdateWithoutOwnedWorkspacesDataInput
  upsert: UserUpsertWithoutOwnedWorkspacesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutLedTeamsDataInput {
  email: String
  workspaces: WorkspaceUpdateManyWithoutUsersInput
  ownedWorkspaces: WorkspaceUpdateManyWithoutAdministratorInput
  skills: SkillUpdateManyWithoutUsersInput
  teams: TeamUpdateManyWithoutUsersInput
}

input UserUpdateWithoutOwnedWorkspacesDataInput {
  email: String
  workspaces: WorkspaceUpdateManyWithoutUsersInput
  skills: SkillUpdateManyWithoutUsersInput
  teams: TeamUpdateManyWithoutUsersInput
  ledTeams: TeamUpdateManyWithoutLeadInput
}

input UserUpdateWithoutSkillsDataInput {
  email: String
  workspaces: WorkspaceUpdateManyWithoutUsersInput
  ownedWorkspaces: WorkspaceUpdateManyWithoutAdministratorInput
  teams: TeamUpdateManyWithoutUsersInput
  ledTeams: TeamUpdateManyWithoutLeadInput
}

input UserUpdateWithoutTeamsDataInput {
  email: String
  workspaces: WorkspaceUpdateManyWithoutUsersInput
  ownedWorkspaces: WorkspaceUpdateManyWithoutAdministratorInput
  skills: SkillUpdateManyWithoutUsersInput
  ledTeams: TeamUpdateManyWithoutLeadInput
}

input UserUpdateWithoutWorkspacesDataInput {
  email: String
  ownedWorkspaces: WorkspaceUpdateManyWithoutAdministratorInput
  skills: SkillUpdateManyWithoutUsersInput
  teams: TeamUpdateManyWithoutUsersInput
  ledTeams: TeamUpdateManyWithoutLeadInput
}

input UserUpdateWithWhereUniqueWithoutSkillsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutSkillsDataInput!
}

input UserUpdateWithWhereUniqueWithoutTeamsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutTeamsDataInput!
}

input UserUpdateWithWhereUniqueWithoutWorkspacesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutWorkspacesDataInput!
}

input UserUpsertWithoutLedTeamsInput {
  update: UserUpdateWithoutLedTeamsDataInput!
  create: UserCreateWithoutLedTeamsInput!
}

input UserUpsertWithoutOwnedWorkspacesInput {
  update: UserUpdateWithoutOwnedWorkspacesDataInput!
  create: UserCreateWithoutOwnedWorkspacesInput!
}

input UserUpsertWithWhereUniqueWithoutSkillsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutSkillsDataInput!
  create: UserCreateWithoutSkillsInput!
}

input UserUpsertWithWhereUniqueWithoutTeamsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutTeamsDataInput!
  create: UserCreateWithoutTeamsInput!
}

input UserUpsertWithWhereUniqueWithoutWorkspacesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutWorkspacesDataInput!
  create: UserCreateWithoutWorkspacesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  workspaces_every: WorkspaceWhereInput
  workspaces_some: WorkspaceWhereInput
  workspaces_none: WorkspaceWhereInput
  ownedWorkspaces_every: WorkspaceWhereInput
  ownedWorkspaces_some: WorkspaceWhereInput
  ownedWorkspaces_none: WorkspaceWhereInput
  skills_every: SkillWhereInput
  skills_some: SkillWhereInput
  skills_none: SkillWhereInput
  teams_every: TeamWhereInput
  teams_some: TeamWhereInput
  teams_none: TeamWhereInput
  ledTeams_every: TeamWhereInput
  ledTeams_some: TeamWhereInput
  ledTeams_none: TeamWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}

type Workspace {
  id: ID!
  name: String!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  administrator: User!
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
}

type WorkspaceConnection {
  pageInfo: PageInfo!
  edges: [WorkspaceEdge]!
  aggregate: AggregateWorkspace!
}

input WorkspaceCreateInput {
  name: String!
  users: UserCreateManyWithoutWorkspacesInput
  administrator: UserCreateOneWithoutOwnedWorkspacesInput!
  teams: TeamCreateManyWithoutWorkspaceInput
}

input WorkspaceCreateManyWithoutAdministratorInput {
  create: [WorkspaceCreateWithoutAdministratorInput!]
  connect: [WorkspaceWhereUniqueInput!]
}

input WorkspaceCreateManyWithoutUsersInput {
  create: [WorkspaceCreateWithoutUsersInput!]
  connect: [WorkspaceWhereUniqueInput!]
}

input WorkspaceCreateOneWithoutTeamsInput {
  create: WorkspaceCreateWithoutTeamsInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceCreateWithoutAdministratorInput {
  name: String!
  users: UserCreateManyWithoutWorkspacesInput
  teams: TeamCreateManyWithoutWorkspaceInput
}

input WorkspaceCreateWithoutTeamsInput {
  name: String!
  users: UserCreateManyWithoutWorkspacesInput
  administrator: UserCreateOneWithoutOwnedWorkspacesInput!
}

input WorkspaceCreateWithoutUsersInput {
  name: String!
  administrator: UserCreateOneWithoutOwnedWorkspacesInput!
  teams: TeamCreateManyWithoutWorkspaceInput
}

type WorkspaceEdge {
  node: Workspace!
  cursor: String!
}

enum WorkspaceOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type WorkspacePreviousValues {
  id: ID!
  name: String!
}

input WorkspaceScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [WorkspaceScalarWhereInput!]
  OR: [WorkspaceScalarWhereInput!]
  NOT: [WorkspaceScalarWhereInput!]
}

type WorkspaceSubscriptionPayload {
  mutation: MutationType!
  node: Workspace
  updatedFields: [String!]
  previousValues: WorkspacePreviousValues
}

input WorkspaceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WorkspaceWhereInput
  AND: [WorkspaceSubscriptionWhereInput!]
  OR: [WorkspaceSubscriptionWhereInput!]
  NOT: [WorkspaceSubscriptionWhereInput!]
}

input WorkspaceUpdateInput {
  name: String
  users: UserUpdateManyWithoutWorkspacesInput
  administrator: UserUpdateOneRequiredWithoutOwnedWorkspacesInput
  teams: TeamUpdateManyWithoutWorkspaceInput
}

input WorkspaceUpdateManyDataInput {
  name: String
}

input WorkspaceUpdateManyMutationInput {
  name: String
}

input WorkspaceUpdateManyWithoutAdministratorInput {
  create: [WorkspaceCreateWithoutAdministratorInput!]
  delete: [WorkspaceWhereUniqueInput!]
  connect: [WorkspaceWhereUniqueInput!]
  disconnect: [WorkspaceWhereUniqueInput!]
  update: [WorkspaceUpdateWithWhereUniqueWithoutAdministratorInput!]
  upsert: [WorkspaceUpsertWithWhereUniqueWithoutAdministratorInput!]
  deleteMany: [WorkspaceScalarWhereInput!]
  updateMany: [WorkspaceUpdateManyWithWhereNestedInput!]
}

input WorkspaceUpdateManyWithoutUsersInput {
  create: [WorkspaceCreateWithoutUsersInput!]
  delete: [WorkspaceWhereUniqueInput!]
  connect: [WorkspaceWhereUniqueInput!]
  disconnect: [WorkspaceWhereUniqueInput!]
  update: [WorkspaceUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [WorkspaceUpsertWithWhereUniqueWithoutUsersInput!]
  deleteMany: [WorkspaceScalarWhereInput!]
  updateMany: [WorkspaceUpdateManyWithWhereNestedInput!]
}

input WorkspaceUpdateManyWithWhereNestedInput {
  where: WorkspaceScalarWhereInput!
  data: WorkspaceUpdateManyDataInput!
}

input WorkspaceUpdateOneRequiredWithoutTeamsInput {
  create: WorkspaceCreateWithoutTeamsInput
  update: WorkspaceUpdateWithoutTeamsDataInput
  upsert: WorkspaceUpsertWithoutTeamsInput
  connect: WorkspaceWhereUniqueInput
}

input WorkspaceUpdateWithoutAdministratorDataInput {
  name: String
  users: UserUpdateManyWithoutWorkspacesInput
  teams: TeamUpdateManyWithoutWorkspaceInput
}

input WorkspaceUpdateWithoutTeamsDataInput {
  name: String
  users: UserUpdateManyWithoutWorkspacesInput
  administrator: UserUpdateOneRequiredWithoutOwnedWorkspacesInput
}

input WorkspaceUpdateWithoutUsersDataInput {
  name: String
  administrator: UserUpdateOneRequiredWithoutOwnedWorkspacesInput
  teams: TeamUpdateManyWithoutWorkspaceInput
}

input WorkspaceUpdateWithWhereUniqueWithoutAdministratorInput {
  where: WorkspaceWhereUniqueInput!
  data: WorkspaceUpdateWithoutAdministratorDataInput!
}

input WorkspaceUpdateWithWhereUniqueWithoutUsersInput {
  where: WorkspaceWhereUniqueInput!
  data: WorkspaceUpdateWithoutUsersDataInput!
}

input WorkspaceUpsertWithoutTeamsInput {
  update: WorkspaceUpdateWithoutTeamsDataInput!
  create: WorkspaceCreateWithoutTeamsInput!
}

input WorkspaceUpsertWithWhereUniqueWithoutAdministratorInput {
  where: WorkspaceWhereUniqueInput!
  update: WorkspaceUpdateWithoutAdministratorDataInput!
  create: WorkspaceCreateWithoutAdministratorInput!
}

input WorkspaceUpsertWithWhereUniqueWithoutUsersInput {
  where: WorkspaceWhereUniqueInput!
  update: WorkspaceUpdateWithoutUsersDataInput!
  create: WorkspaceCreateWithoutUsersInput!
}

input WorkspaceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  administrator: UserWhereInput
  teams_every: TeamWhereInput
  teams_some: TeamWhereInput
  teams_none: TeamWhereInput
  AND: [WorkspaceWhereInput!]
  OR: [WorkspaceWhereInput!]
  NOT: [WorkspaceWhereInput!]
}

input WorkspaceWhereUniqueInput {
  id: ID
  name: String
}
`