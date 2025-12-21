import Setter

export type TUser = {
  _id?: string | mongoose.Types.ObjectId;
  lastLogin: number;
  index: number | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  username: string | undefined;
  password: string | undefined;
  country: string;
  profileImage: string;
  subscriptionType: "free" | "bronze" | "silver" | "gold" | "platinum";
  hostingCredits: number;
  interestedCategories: string[];
};

export type TUserSecure = {
  _id?: string | mongoose.Types.ObjectId;
  index: number | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  username: string | undefined;
  country?: string;
  emailAddress?: string | undefined;
  profileImage: string;
  about: string;
  interestedCategories: string[];
};

export type TAnswer = {
  text: string;
  isCorrect: boolean;
  explanation: string;
};

export type TQuestion = {
  question: string;
  answers: TAnswer[];
};

export type TQuiz = {
  name: string;
  questions: TQuestion[];
};

export type TMainContext = {
  toggleTheme: () => void;
};

export type TUserContext = {
  lastLogin: number;
  setLastLogin: React.Dispatch<React.SetStateAction<number>>;
  blockUserInProgress: boolean;
  setBlockUserInProgress: React.Dispatch<React.SetStateAction<boolean>>;
  fetchFriendRequestsIsLoading: boolean;
  setFetchFriendRequestsIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  fetchFriendRequestsSentIsError: boolean;
  setFetchFriendRequestsSentIsError: React.Dispatch<React.SetStateAction<boolean>>;
  fetchFriendRequestsReceivedIsError: boolean;
  setFetchFriendRequestsReceivedIsError: React.Dispatch<React.SetStateAction<boolean>>;
  userHasLoggedIn: boolean;
  friendRequestsSent: TBarebonesUser[] | null;
  setFriendRequestsSent: React.Dispatch<React.SetStateAction<TBarebonesUser[] | null>>;
  friendRequestsReceived: TBarebonesUser[] | null;
  setFriendRequestsReceived: React.Dispatch<
    React.SetStateAction<TBarebonesUser[] | null>
  >;
  blockedUsers: TBarebonesUser[] | null;
  setBlockedUsers: React.Dispatch<React.SetStateAction<TBarebonesUser[] | null>>;
  fetchBlockedUsersIsLoading: boolean;
  setFetchBlockedUsersIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  fetchBlockedUsersIsError: boolean;
  setFetchBlockedUsersIsError: React.Dispatch<React.SetStateAction<boolean>>;
  handleUnblockUser: (blocker: TBarebonesUser, blockee: TBarebonesUser) => void;
  currentOtherUser: TUserSecure | null;
  setCurrentOtherUser: React.Dispatch<React.SetStateAction<TUserSecure | null>>;
  getOtherUserFriends: (otherUserID: string) => TUser[];
  handleSendFriendRequest: (
    recipient: TUserSecure | TUser | undefined,
    shouldOptimisticRender?: boolean
  ) => void;
  handleRetractFriendRequest: (
    recipient: TUserSecure | TUser,
    sender: TUserSecure | TUser,
    event?: "accept-request" | "retract-request" | "reject-request"
  ) => void;
  showFriendRequestResponseOptions: boolean;
  setShowFriendRequestResponseOptions: React.Dispatch<React.SetStateAction<boolean>>;
  handleUnfriending: (
    user: TUserSecure | TUser,
    friend: TUserSecure | TUser,
    array?: (TUserSecure | TBarebonesUser | TEvent)[],
    setArray?: React.Dispatch<
      React.SetStateAction<(TBarebonesUser | TUserSecure | TEvent)[]>
    >
  ) => void;
  handleAcceptFriendRequest: (
    sender: TUserSecure,
    receiver: TUserSecure,
    optimisticRender: boolean,
    e?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleRejectFriendRequest: (
    sender: TUserSecure | TBarebonesUser,
    e?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  accountDeletionInProgress: boolean;
  setAccountDeletionInProgress: React.Dispatch<React.SetStateAction<boolean>>;
  showUpdateProfileImageInterface: boolean;
  setShowUpdateProfileImageInterface: React.Dispatch<React.SetStateAction<boolean>>;
  removeProfileImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userValuesToUpdate: TUserValuesToUpdate;
  handleProfileImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  profileImage: string | unknown;
  setProfileImage: React.Dispatch<React.SetStateAction<string | unknown>>;
  handleCityStateCountryInput: (
    stateValues: {
      city: string | undefined;
      state: string | undefined;
      country: string | undefined;
    },
    setters: {
      citySetter?: (value: React.SetStateAction<string | undefined>) => void;
      stateSetter?: (value: React.SetStateAction<string | undefined>) => void;
      countrySetter?: (value: React.SetStateAction<string | undefined>) => void;
      errorSetter: (value: React.SetStateAction<string>) => void;
      showCountriesSetter?: (value: React.SetStateAction<boolean>) => void;
    },
    locationType: "city" | "state" | "country",
    country?: string,
    e?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  phoneCountry: string | undefined;
  setPhoneCountry: React.Dispatch<React.SetStateAction<string | undefined>>;
  phoneCountryCode: string | undefined;
  setPhoneCountryCode: React.Dispatch<React.SetStateAction<string | undefined>>;
  phoneNumberWithoutCountryCode: string | undefined;
  setPhoneNumberWithoutCountryCode: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  phoneNumberError: string;
  setPhoneNumberError: React.Dispatch<React.SetStateAction<string>>;
  loginMethod: "username" | "email";
  signupIsSelected: boolean;
  setSignupIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  passwordIsHidden: boolean;
  setPasswordIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  confirmationPasswordIsHidden: boolean;
  setConfirmationPasswordIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSignupLogin: () => void;
  toggleHidePassword: (type: "password" | "confirmation-password") => void;
  firstName: string | undefined;
  setFirstName: React.Dispatch<React.SetStateAction<string | undefined>>;
  firstNameError: string;
  setFirstNameError: React.Dispatch<React.SetStateAction<string>>;
  lastName: string | undefined;
  setLastName: React.Dispatch<React.SetStateAction<string | undefined>>;
  lastNameError: string;
  setLastNameError: React.Dispatch<React.SetStateAction<string>>;
  username: string | undefined;
  setUsername: React.Dispatch<React.SetStateAction<string | undefined>>;
  usernameError: string | undefined;
  setUsernameError: React.Dispatch<React.SetStateAction<string>>;
  emailAddress: string | undefined;
  setEmailAddress: React.Dispatch<React.SetStateAction<string | undefined>>;
  emailError: string;
  setEmailError: React.Dispatch<React.SetStateAction<string>>;
  password: string | undefined;
  setPassword: React.Dispatch<React.SetStateAction<string | undefined>>;
  passwordError: string;
  setPasswordError: React.Dispatch<React.SetStateAction<string>>;
  confirmationPassword: string;
  setConfirmationPassword: React.Dispatch<React.SetStateAction<string>>;
  userCity: string | undefined;
  setUserCity: React.Dispatch<React.SetStateAction<string | undefined>>;
  userState: string | undefined;
  setUserState: React.Dispatch<React.SetStateAction<string | undefined>>;
  userCountry: string | undefined;
  setUserCountry: React.Dispatch<React.SetStateAction<string | undefined>>;
  locationError: string;
  setLocationError: React.Dispatch<React.SetStateAction<string>>;
  confirmationPasswordError: string;
  setConfirmationPasswordError: React.Dispatch<React.SetStateAction<string>>;
  areNoSignupFormErrors: boolean;
  areNoLoginErrors: boolean;
  allSignupFormFieldsFilled: boolean;
  allLoginInputsFilled: boolean;
  showErrors: boolean;
  handleNameInput: (
    name: string,
    isFirstName: boolean,
    formType: "signup" | "edit-user-info"
  ) => void;
  handleUsernameInput: (username: string, formType: "signup" | "edit-user-info") => void;
  handleEmailAddressInput: (email: string, formType: "signup" | "edit-user-info") => void;
  handlePasswordInput: (
    inputPassword: string,
    formType: "login" | "signup" | "edit-user-info"
  ) => void;
  handleConfirmationPasswordInput: (
    inputConfirmationPassword: string,
    formType: "login" | "signup" | "edit-user-info"
  ) => void;
  handleUsernameOrEmailInput: (input: string) => void;
  handleSignupOrLoginFormSubmission: (
    isOnSignup: boolean,
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleFormRejection: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  showPasswordCriteria: boolean;
  setShowPasswordCriteria: React.Dispatch<React.SetStateAction<boolean>>;
  showUsernameCriteria: boolean;
  setShowUsernameCriteria: React.Dispatch<React.SetStateAction<boolean>>;
  resetLoginOrSignupFormFieldsAndErrors: () => void;
  logout: () => void;
  facebook: string | undefined;
  setFacebook: React.Dispatch<React.SetStateAction<string | undefined>>;
  facebookError: string;
  setFacebookError: React.Dispatch<React.SetStateAction<string>>;
  instagram: string | undefined;
  setInstagram: React.Dispatch<React.SetStateAction<string | undefined>>;
  instagramError: string;
  setInstagramError: React.Dispatch<React.SetStateAction<string>>;
  x: string | undefined;
  setX: React.Dispatch<React.SetStateAction<string | undefined>>;
  xError: string;
  setXError: React.Dispatch<React.SetStateAction<string>>;
  userAbout: string | undefined;
  setUserAbout: React.Dispatch<React.SetStateAction<string | undefined>>;
  userAboutError: string;
  setUserAboutError: React.Dispatch<React.SetStateAction<string>>;
  whoCanAddUserAsOrganizer:
    | "anyone"
    | "friends"
    | "nobody"
    | "friends of friends"
    | undefined;
  setWhoCanAddUserAsOrganizer: React.Dispatch<
    React.SetStateAction<
      "anyone" | "friends" | "nobody" | "friends of friends" | undefined
    >
  >;
  whoCanInviteUser: "anyone" | "friends" | "friends of friends" | "nobody" | undefined;
  setWhoCanInviteUser: React.Dispatch<
    React.SetStateAction<
      "anyone" | "friends" | "friends of friends" | "nobody" | undefined
    >
  >;
  profileVisibleTo: "anyone" | "friends" | "friends of friends" | undefined;
  setProfileVisibleTo: React.Dispatch<
    React.SetStateAction<"anyone" | "friends" | "friends of friends" | undefined>
  >;
  whoCanMessage: "anyone" | "friends" | "nobody" | "friends of friends" | undefined;
  setWhoCanMessage: React.Dispatch<
    React.SetStateAction<
      "anyone" | "friends" | "friends of friends" | "nobody" | undefined
    >
  >;
  whoCanSeeLocation: "friends" | "anyone" | "nobody" | "friends of friends" | undefined;
  setWhoCanSeeLocation: React.Dispatch<
    React.SetStateAction<
      "anyone" | "friends" | "nobody" | "friends of friends" | undefined
    >
  >;
  displayFriendCount: boolean | undefined;
  setDisplayFriendCount: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  whoCanSeeFriendsList:
    | "friends"
    | "anyone"
    | "nobody"
    | "friends of friends"
    | undefined;
  setWhoCanSeeFriendsList: React.Dispatch<
    React.SetStateAction<
      "anyone" | "friends" | "nobody" | "friends of friends" | undefined
    >
  >;
  whoCanSeePhoneNumber:
    | "friends"
    | "anyone"
    | "nobody"
    | "friends of friends"
    | undefined;
  setWhoCanSeePhoneNumber: React.Dispatch<
    React.SetStateAction<
      "anyone" | "friends" | "nobody" | "friends of friends" | undefined
    >
  >;
  whoCanSeeEmailAddress:
    | "friends"
    | "anyone"
    | "nobody"
    | "friends of friends"
    | undefined;
  setWhoCanSeeEmailAddress: React.Dispatch<
    React.SetStateAction<
      "anyone" | "friends" | "nobody" | "friends of friends" | undefined
    >
  >;
  whoCanSeeFacebook: "friends" | "anyone" | "nobody" | "friends of friends" | undefined;
  setWhoCanSeeFacebook: React.Dispatch<
    React.SetStateAction<
      "anyone" | "friends" | "nobody" | "friends of friends" | undefined
    >
  >;
  whoCanSeeX: "friends" | "anyone" | "nobody" | "friends of friends" | undefined;
  setWhoCanSeeX: React.Dispatch<
    React.SetStateAction<
      "anyone" | "friends" | "nobody" | "friends of friends" | undefined
    >
  >;
  whoCanSeeInstagram: "friends" | "anyone" | "nobody" | "friends of friends" | undefined;
  setWhoCanSeeInstagram: React.Dispatch<
    React.SetStateAction<
      "anyone" | "friends" | "nobody" | "friends of friends" | undefined
    >
  >;
  whoCanSeeEventsOrganized:
    | "friends"
    | "anyone"
    | "nobody"
    | "friends of friends"
    | undefined;
  setWhoCanSeeEventsOrganized: React.Dispatch<
    React.SetStateAction<
      "anyone" | "friends" | "nobody" | "friends of friends" | undefined
    >
  >;
  whoCanSeeEventsInterestedIn:
    | "friends"
    | "anyone"
    | "nobody"
    | "friends of friends"
    | undefined;
  setWhoCanSeeEventsInterestedIn: React.Dispatch<
    React.SetStateAction<
      "anyone" | "friends" | "nobody" | "friends of friends" | undefined
    >
  >;
  whoCanSeeEventsInvitedTo:
    | "friends"
    | "anyone"
    | "nobody"
    | "friends of friends"
    | undefined;
  setWhoCanSeeEventsInvitedTo: React.Dispatch<
    React.SetStateAction<
      "anyone" | "friends" | "nobody" | "friends of friends" | undefined
    >
  >;
  userCreatedAccount: null | boolean;
  setUserCreatedAccount: React.Dispatch<React.SetStateAction<boolean | null>>;
  currentUser: TUser | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<TUser | null>>;
  updateProfileImageIsLoading: boolean;
  setUpdateProfileImageIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  removeProfileImageIsLoading: boolean;
  setRemoveProfileImageIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  processingLoginIsLoading: boolean;
  setProcessingLoginIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
