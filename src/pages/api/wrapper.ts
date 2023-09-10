/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum RoleEnum {
  USER = "USER",
  ADMIN = "ADMIN",
}

/** Модель пользователя */
export interface InfoData {
  id: number;
  firstName: string;
  lastName: string;
  token: string;
  role: RoleEnum;
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type InfoError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

export enum ItemsIceClassEnum {
  NoIceClass = "NoIceClass",
  Ice1 = "Ice1",
  Ice2 = "Ice2",
  Ice3 = "Ice3",
  Arc4 = "Arc4",
  Arc5 = "Arc5",
  Arc6 = "Arc6",
  Arc7 = "Arc7",
  Arc8 = "Arc8",
  Arc9 = "Arc9",
}

/** Список */
export interface ListData {
  pageCount: number;
  items: {
    iceBreaker: {
      imo: number;
      name: string;
    };
    tanker: {
      imo: number;
      name: string;
      speed: number;
      iceClass: ItemsIceClassEnum;
    };
    id: number;
    startTime: number;
    endTime: number;
    startLine: string;
    endLine: string;
  }[];
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type ListError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

export type ImportData = any;

/** Сообщение о том что заявка успешно удалена */
export type ExportData = string;

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type ExportError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

export enum RoleEnum1 {
  USER = "USER",
  ADMIN = "ADMIN",
}

/** Модель пользователя */
export interface SignInData {
  id: number;
  firstName: string;
  lastName: string;
  token: string;
  role: RoleEnum1;
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type SignInError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

export enum ItemsIceClassEnum1 {
  NoIceClass = "NoIceClass",
  Ice1 = "Ice1",
  Ice2 = "Ice2",
  Ice3 = "Ice3",
  Arc4 = "Arc4",
  Arc5 = "Arc5",
  Arc6 = "Arc6",
  Arc7 = "Arc7",
  Arc8 = "Arc8",
  Arc9 = "Arc9",
}

/** Список */
export interface TankerRequestListData {
  pageCount: number;
  items: {
    startPoint: string;
    endPoint: string;
    startTime: number;
    endTime: number;
    id: number;
    tanker: {
      imo: number;
      name: string;
      speed: number;
      iceClass: ItemsIceClassEnum1;
    };
  }[];
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type TankerRequestListError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

export type TankerRequestImportData = any;

/** Сообщение о том что заявка успешно удалена */
export type TankerRequestExportData = string;

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type TankerRequestExportError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

/** Сообщение о том что заявка успешно удалена */
export interface TankerRequestDeleteData {
  message: string;
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type TankerRequestDeleteError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

export enum TankerIceClassEnum {
  NoIceClass = "NoIceClass",
  Ice1 = "Ice1",
  Ice2 = "Ice2",
  Ice3 = "Ice3",
  Arc4 = "Arc4",
  Arc5 = "Arc5",
  Arc6 = "Arc6",
  Arc7 = "Arc7",
  Arc8 = "Arc8",
  Arc9 = "Arc9",
}

export enum IceClassEnum {
  NoIceClass = "NoIceClass",
  Ice1 = "Ice1",
  Ice2 = "Ice2",
  Ice3 = "Ice3",
  Arc4 = "Arc4",
  Arc5 = "Arc5",
  Arc6 = "Arc6",
  Arc7 = "Arc7",
  Arc8 = "Arc8",
  Arc9 = "Arc9",
}

/** Ответ */
export interface TankerRequestCreateData {
  startPoint: string;
  endPoint: string;
  startTime: number;
  endTime: number;
  tanker: {
    imo: number;
    name: string;
    iceClass: TankerIceClassEnum;
    speed: number;
  };
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type TankerRequestCreateError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

/** Сообщение о том что заявка успешно удалена */
export type TankerExportData = string;

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type TankerExportError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

export enum ItemsIceClassEnum2 {
  NoIceClass = "NoIceClass",
  Ice1 = "Ice1",
  Ice2 = "Ice2",
  Ice3 = "Ice3",
  Arc4 = "Arc4",
  Arc5 = "Arc5",
  Arc6 = "Arc6",
  Arc7 = "Arc7",
  Arc8 = "Arc8",
  Arc9 = "Arc9",
}

/** Список */
export interface TankerListData {
  pageCount: number;
  items: {
    imo: number;
    name: string;
    speed: number;
    iceClass: ItemsIceClassEnum2;
    metadata?: {
      shipType: string;
      flagCountryCode: string;
      dateOfBuild: string;
      grossTonnage: number;
      summerDeadweight: number;
      lengthOverall: number;
      beam: number;
      registeredOwner?: {
        name: string;
        countryCode: string;
        imo: number;
      } | null;
    };
  }[];
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type TankerListError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

export interface IceBreakerUpdateData {
  imo: number;
  name: string;
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type IceBreakerUpdateError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

/** Список */
export interface IceBreakerListData {
  pageCount: number;
  items: {
    imo: number;
    name: string;
    metadata?: {
      shipType: string;
      flagCountryCode: string;
      dateOfBuild: string;
      grossTonnage: number;
      summerDeadweight: number;
      lengthOverall: number;
      beam: number;
      registeredOwner?: {
        name: string;
        countryCode: string;
        imo: number;
      } | null;
    };
  }[];
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type IceBreakerListError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

export type IceBreakerImportData = any;

/** Сообщение о том что заявка успешно удалена */
export type IceBreakerExportData = string;

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type IceBreakerExportError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

export interface IceBreakerData {
  imo: number;
  name: string;
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type IceBreakerError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

/** Сообщение о том что ледокол успешно удалён */
export interface IceBreakerDeleteData {
  message: string;
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type IceBreakerDeleteError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

/** Ответ */
export interface IceBreakerCreateData {
  /**
   * @min 1000000
   * @max 9999999
   */
  imo: number;
  /** @minLength 3 */
  name: string;
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type IceBreakerCreateError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

/** Список */
export interface EdgeAvailabilityListData {
  pageCount: number;
  items: {
    isFeasible: boolean;
    iceBreakerName: string;
    id: number;
  }[];
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type EdgeAvailabilityListError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

/** Сообщение о том что заявка успешно удалена */
export type EdgeAvailabilityExportData = string;

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type EdgeAvailabilityExportError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

export type EdgeAvailabilityImportData = any;

export interface EdgeAvailabilityDeleteData {
  message: string;
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type EdgeAvailabilityDeleteError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

/** Ответ */
export interface EdgeAvailabilityCreateData {
  edgeId: number;
  iceBreakerName: string;
  isFeasible: boolean;
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type EdgeAvailabilityCreateError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

/** Список */
export interface DayIceCohesionListData {
  pageCount: number;
  items: {
    id: number;
    date: string;
    iceCohesion: number;
  }[];
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type DayIceCohesionListError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

export type DayIceCohesionImportData = any;

/** Сообщение о том что заявка успешно удалена */
export type DayIceCohesionExportData = string;

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type DayIceCohesionExportError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

export interface DayIceCohesionDeleteData {
  message: string;
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type DayIceCohesionDeleteError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

/** Ответ */
export interface DayIceCohesionCreateData {
  edgeId: number;
  date: string;
  iceCohesion: number;
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type DayIceCohesionCreateError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

export enum RoleEnum2 {
  USER = "USER",
  ADMIN = "ADMIN",
}

/** Модель обновлённого пользователя */
export interface UserUpdateData {
  id: number;
  firstName: string;
  lastName: string;
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type UserUpdateError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

export enum ItemsRoleEnum {
  USER = "USER",
  ADMIN = "ADMIN",
}

/** Список пользователй */
export interface UserListData {
  pageCount: number;
  items: {
    id: number;
    firstName: string;
    lastName: string;
    role: ItemsRoleEnum;
    login: string;
  }[];
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type UserListError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

/** Сообщение о том что пользователь успешно удалён */
export interface UserDeleteData {
  message: string;
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type UserDeleteError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

export enum RoleEnum3 {
  USER = "USER",
  ADMIN = "ADMIN",
}

/** Модель пользователя */
export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  role: RoleEnum3;
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type UserError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

export enum RoleEnum4 {
  USER = "USER",
  ADMIN = "ADMIN",
}

/** Модель пользователя */
export interface UserCreateData {
  id: number;
  firstName: string;
  lastName: string;
  role: RoleEnum4;
}

/**
 * Ошибка валидации
 * Ошибка сервера. Что-то пошло не так
 */
export type UserCreateError =
  | {
      /** @default "VALIDATION_ERROR" */
      code?: string;
      /** @default "Произошла ошибка валидации" */
      message?: string;
      errors: {
        code: string;
        message: string;
        path: string;
      }[];
    }
  | {
      /** @default "USER_NOT_EXISTS" */
      code?: string;
      /** @default "Введённые вами логин или пароль неверны" */
      message?: string;
    }
  | {
      /** @default "SERVER_ERROR" */
      code?: string;
      /** @default "На сервере произошла техническая ошибка. Попробуйте позже" */
      message?: string;
    };

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "https://api.noname.to" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title hacksAI backend
 * @version 1.0
 * @baseUrl https://api.noname.to
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  user = {
    /**
 * @description Получение своего профиля
 *
 * @tags user
 * @name Info
 * @request GET:/user/info
 * @secure
 * @response `200` `InfoData` Модель пользователя
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    info: (params: RequestParams = {}) =>
      this.request<InfoData, InfoError>({
        path: `/user/info`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  schedule = {
    /**
 * @description Получение списка
 *
 * @tags schedule
 * @name ListList
 * @request GET:/schedule/list
 * @secure
 * @response `200` `ListData` Список
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    listList: (
      query?: {
        /** @default "1" */
        page?: string;
        /** @default "100" */
        pageSize?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ListData, ListError>({
        path: `/schedule/list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Импорт csv
     *
     * @tags schedule
     * @name ImportCreate
     * @request POST:/schedule/import
     * @secure
     * @response `200` `ImportData` Default Response
     * @response `401` `any` Default Response
     */
    importCreate: (
      data: {
        dataset: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<ImportData, any>({
        path: `/schedule/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
 * @description Удаление заяки администратором
 *
 * @tags schedule
 * @name ExportList
 * @request GET:/schedule/export
 * @secure
 * @response `200` `ExportData` Сообщение о том что заявка успешно удалена
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    exportList: (params: RequestParams = {}) =>
      this.request<ExportData, ExportError>({
        path: `/schedule/export`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  auth = {
    /**
 * @description Авторизация в системе
 *
 * @tags user
 * @name SignIn
 * @request POST:/auth/signIn
 * @response `200` `SignInData` Модель пользователя
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    signIn: (
      data: {
        login: string;
        /** @minLength 4 */
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SignInData, SignInError>({
        path: `/auth/signIn`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  dataset = {
    /**
 * @description Получение списка
 *
 * @tags tankerRequest
 * @name TankerRequestListList
 * @request GET:/dataset/tankerRequest/list
 * @secure
 * @response `200` `TankerRequestListData` Список
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    tankerRequestListList: (
      query?: {
        /** @default "1" */
        page?: string;
        /** @default "100" */
        pageSize?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TankerRequestListData, TankerRequestListError>({
        path: `/dataset/tankerRequest/list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Импорт csv
     *
     * @tags tankerRequest
     * @name TankerRequestImportCreate
     * @request POST:/dataset/tankerRequest/import
     * @secure
     * @response `200` `TankerRequestImportData` Default Response
     * @response `401` `any` Default Response
     */
    tankerRequestImportCreate: (
      data: {
        dataset: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<TankerRequestImportData, any>({
        path: `/dataset/tankerRequest/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
 * @description Удаление заяки администратором
 *
 * @tags tankerRequest
 * @name TankerRequestExportList
 * @request GET:/dataset/tankerRequest/export
 * @secure
 * @response `200` `TankerRequestExportData` Сообщение о том что заявка успешно удалена
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    tankerRequestExportList: (params: RequestParams = {}) =>
      this.request<TankerRequestExportData, TankerRequestExportError>({
        path: `/dataset/tankerRequest/export`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
 * @description Удаление заяки администратором
 *
 * @tags tankerRequest
 * @name TankerRequestDeleteDelete
 * @request DELETE:/dataset/tankerRequest/{iceBreakerId}/delete
 * @secure
 * @response `200` `TankerRequestDeleteData` Сообщение о том что заявка успешно удалена
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    tankerRequestDeleteDelete: (iceBreakerId: number, params: RequestParams = {}) =>
      this.request<TankerRequestDeleteData, TankerRequestDeleteError>({
        path: `/dataset/tankerRequest/${iceBreakerId}/delete`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
 * @description Создание заявки ледокола администратором
 *
 * @tags tankerRequest
 * @name TankerRequestCreateCreate
 * @request POST:/dataset/tankerRequest/create
 * @secure
 * @response `200` `TankerRequestCreateData` Ответ
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    tankerRequestCreateCreate: (
      data: {
        startPoint: string;
        endPoint: string;
        startTime: number;
        endTime: number;
        /**
         * @min 1000000
         * @max 9999999
         */
        imo: number;
        /** @minLength 3 */
        name: string;
        iceClass: IceClassEnum;
        speed: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TankerRequestCreateData, TankerRequestCreateError>({
        path: `/dataset/tankerRequest/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
 * @description Удаление заяки администратором
 *
 * @tags tanker
 * @name TankerExportList
 * @request GET:/dataset/tanker/export
 * @secure
 * @response `200` `TankerExportData` Сообщение о том что заявка успешно удалена
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    tankerExportList: (params: RequestParams = {}) =>
      this.request<TankerExportData, TankerExportError>({
        path: `/dataset/tanker/export`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
 * @description Получение списка
 *
 * @tags tanker
 * @name TankerListList
 * @request GET:/dataset/tanker/list
 * @secure
 * @response `200` `TankerListData` Список
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    tankerListList: (
      query?: {
        /** @default "1" */
        page?: string;
        /** @default "100" */
        pageSize?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TankerListData, TankerListError>({
        path: `/dataset/tanker/list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
 * @description Обновление
 *
 * @tags iceBreaker
 * @name IceBreakerUpdateCreate
 * @request POST:/dataset/iceBreaker/{iceBreakerImo}/update
 * @secure
 * @response `200` `IceBreakerUpdateData` Default Response
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    iceBreakerUpdateCreate: (
      iceBreakerImo: number,
      data: {
        name: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<IceBreakerUpdateData, IceBreakerUpdateError>({
        path: `/dataset/iceBreaker/${iceBreakerImo}/update`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
 * @description Получение списка
 *
 * @tags iceBreaker
 * @name IceBreakerListList
 * @request GET:/dataset/iceBreaker/list
 * @secure
 * @response `200` `IceBreakerListData` Список
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    iceBreakerListList: (
      query?: {
        /** @default "1" */
        page?: string;
        /** @default "100" */
        pageSize?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<IceBreakerListData, IceBreakerListError>({
        path: `/dataset/iceBreaker/list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Импорт csv
     *
     * @tags iceBreaker
     * @name IceBreakerImportCreate
     * @request POST:/dataset/iceBreaker/import
     * @secure
     * @response `200` `IceBreakerImportData` Default Response
     * @response `401` `any` Default Response
     */
    iceBreakerImportCreate: (
      data: {
        dataset: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<IceBreakerImportData, any>({
        path: `/dataset/iceBreaker/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
 * @description Удаление заяки администратором
 *
 * @tags tankerRequest
 * @name IceBreakerExportList
 * @request GET:/dataset/iceBreaker/export
 * @secure
 * @response `200` `IceBreakerExportData` Сообщение о том что заявка успешно удалена
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    iceBreakerExportList: (params: RequestParams = {}) =>
      this.request<IceBreakerExportData, IceBreakerExportError>({
        path: `/dataset/iceBreaker/export`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
 * @description Получение ледокола
 *
 * @tags iceBreaker
 * @name IceBreakerDetail
 * @request GET:/dataset/iceBreaker/{iceBreakerImo}
 * @secure
 * @response `200` `IceBreakerData` Default Response
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    iceBreakerDetail: (iceBreakerImo: number, params: RequestParams = {}) =>
      this.request<IceBreakerData, IceBreakerError>({
        path: `/dataset/iceBreaker/${iceBreakerImo}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
 * @description Удаление ледокола администратором
 *
 * @tags iceBreaker
 * @name IceBreakerDeleteDelete
 * @request DELETE:/dataset/iceBreaker/{iceBreakerImo}/delete
 * @secure
 * @response `200` `IceBreakerDeleteData` Сообщение о том что ледокол успешно удалён
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    iceBreakerDeleteDelete: (iceBreakerImo: number, params: RequestParams = {}) =>
      this.request<IceBreakerDeleteData, IceBreakerDeleteError>({
        path: `/dataset/iceBreaker/${iceBreakerImo}/delete`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
 * @description Создание ледокола администратором
 *
 * @tags iceBreaker
 * @name IceBreakerCreateCreate
 * @request POST:/dataset/iceBreaker/create
 * @secure
 * @response `200` `IceBreakerCreateData` Ответ
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    iceBreakerCreateCreate: (
      data: {
        /**
         * @min 1000000
         * @max 9999999
         */
        imo: number;
        /** @minLength 3 */
        name: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<IceBreakerCreateData, IceBreakerCreateError>({
        path: `/dataset/iceBreaker/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
 * @description Получение списка
 *
 * @tags edgeAvailability
 * @name EdgeAvailabilityListList
 * @request GET:/dataset/edgeAvailability/list
 * @secure
 * @response `200` `EdgeAvailabilityListData` Список
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    edgeAvailabilityListList: (
      query: {
        /** @default "1" */
        page?: string;
        pageSize: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EdgeAvailabilityListData, EdgeAvailabilityListError>({
        path: `/dataset/edgeAvailability/list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
 * @description Удаление заяки администратором
 *
 * @tags tankerRequest
 * @name EdgeAvailabilityExportList
 * @request GET:/dataset/edgeAvailability/export
 * @secure
 * @response `200` `EdgeAvailabilityExportData` Сообщение о том что заявка успешно удалена
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    edgeAvailabilityExportList: (params: RequestParams = {}) =>
      this.request<EdgeAvailabilityExportData, EdgeAvailabilityExportError>({
        path: `/dataset/edgeAvailability/export`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Импорт csv
     *
     * @tags edgeAvailability
     * @name EdgeAvailabilityImportCreate
     * @request POST:/dataset/edgeAvailability/import
     * @secure
     * @response `200` `EdgeAvailabilityImportData` Default Response
     * @response `401` `any` Default Response
     */
    edgeAvailabilityImportCreate: (
      data: {
        dataset: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<EdgeAvailabilityImportData, any>({
        path: `/dataset/edgeAvailability/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
 * @description Удаление
 *
 * @tags edgeAvailability
 * @name EdgeAvailabilityDeleteDelete
 * @request DELETE:/dataset/edgeAvailability/{edgeId}/{iceBreakerName}/delete
 * @secure
 * @response `200` `EdgeAvailabilityDeleteData` Default Response
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    edgeAvailabilityDeleteDelete: (edgeId: number, iceBreakerName: string, params: RequestParams = {}) =>
      this.request<EdgeAvailabilityDeleteData, EdgeAvailabilityDeleteError>({
        path: `/dataset/edgeAvailability/${edgeId}/${iceBreakerName}/delete`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
 * @description Указание доступности ребра для ледокола
 *
 * @tags edgeAvailability
 * @name EdgeAvailabilityCreateCreate
 * @request POST:/dataset/edgeAvailability/create
 * @secure
 * @response `200` `EdgeAvailabilityCreateData` Ответ
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    edgeAvailabilityCreateCreate: (
      data: {
        edgeId: number;
        iceBreakerName: string;
        isFeasible: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<EdgeAvailabilityCreateData, EdgeAvailabilityCreateError>({
        path: `/dataset/edgeAvailability/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
 * @description Получение списка
 *
 * @tags dayIceCohesion
 * @name DayIceCohesionListList
 * @request GET:/dataset/dayIceCohesion/list
 * @secure
 * @response `200` `DayIceCohesionListData` Список
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    dayIceCohesionListList: (
      query?: {
        /** @default "1" */
        page?: string;
        /** @default "100" */
        pageSize?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<DayIceCohesionListData, DayIceCohesionListError>({
        path: `/dataset/dayIceCohesion/list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Импорт csv
     *
     * @tags dayIceCohesion
     * @name DayIceCohesionImportCreate
     * @request POST:/dataset/dayIceCohesion/import
     * @secure
     * @response `200` `DayIceCohesionImportData` Default Response
     * @response `401` `any` Default Response
     */
    dayIceCohesionImportCreate: (
      data: {
        dataset: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<DayIceCohesionImportData, any>({
        path: `/dataset/dayIceCohesion/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
 * @description Удаление заяки администратором
 *
 * @tags tankerRequest
 * @name DayIceCohesionExportList
 * @request GET:/dataset/dayIceCohesion/export
 * @secure
 * @response `200` `DayIceCohesionExportData` Сообщение о том что заявка успешно удалена
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    dayIceCohesionExportList: (params: RequestParams = {}) =>
      this.request<DayIceCohesionExportData, DayIceCohesionExportError>({
        path: `/dataset/dayIceCohesion/export`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
 * @description Удаление
 *
 * @tags dayIceCohesion
 * @name DayIceCohesionDeleteDelete
 * @request DELETE:/dataset/dayIceCohesion/{edgeId}/{date}/delete
 * @secure
 * @response `200` `DayIceCohesionDeleteData` Default Response
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    dayIceCohesionDeleteDelete: (edgeId: number, date: string, params: RequestParams = {}) =>
      this.request<DayIceCohesionDeleteData, DayIceCohesionDeleteError>({
        path: `/dataset/dayIceCohesion/${edgeId}/${date}/delete`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
 * @description Указание погодных условий задаются для номера ребра
 *
 * @tags dayIceCohesion
 * @name DayIceCohesionCreateCreate
 * @request POST:/dataset/dayIceCohesion/create
 * @secure
 * @response `200` `DayIceCohesionCreateData` Ответ
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    dayIceCohesionCreateCreate: (
      data: {
        edgeId: number;
        date: string;
        /**
         * @min 0
         * @max 10
         */
        iceCohesion: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<DayIceCohesionCreateData, DayIceCohesionCreateError>({
        path: `/dataset/dayIceCohesion/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  admin = {
    /**
 * @description Обновление пользователя администратором
 *
 * @tags admin
 * @name UserUpdateCreate
 * @request POST:/admin/user/update
 * @secure
 * @response `200` `UserUpdateData` Модель обновлённого пользователя
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    userUpdateCreate: (
      data: {
        id: number;
        firstName?: string;
        lastName?: string;
        password?: string;
        role: RoleEnum2;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserUpdateData, UserUpdateError>({
        path: `/admin/user/update`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
 * @description Получение списка пользователей администратором
 *
 * @tags admin
 * @name UserListList
 * @request GET:/admin/user/list
 * @secure
 * @response `200` `UserListData` Список пользователй
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    userListList: (
      query?: {
        /** @default "1" */
        page?: string;
        /** @default "100" */
        pageSize?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserListData, UserListError>({
        path: `/admin/user/list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
 * @description Удаление пользователя администратором
 *
 * @tags admin
 * @name UserDeleteDelete
 * @request DELETE:/admin/user/{userId}/delete
 * @secure
 * @response `200` `UserDeleteData` Сообщение о том что пользователь успешно удалён
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    userDeleteDelete: (userId: string, params: RequestParams = {}) =>
      this.request<UserDeleteData, UserDeleteError>({
        path: `/admin/user/${userId}/delete`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
 * @description Получение пользователя
 *
 * @tags admin
 * @name UserDetail
 * @request GET:/admin/user/{userId}
 * @secure
 * @response `200` `UserData` Модель пользователя
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    userDetail: (userId: string, params: RequestParams = {}) =>
      this.request<UserData, UserError>({
        path: `/admin/user/${userId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
 * @description Создание пользователя администратором
 *
 * @tags admin
 * @name UserCreateCreate
 * @request POST:/admin/user/create
 * @secure
 * @response `200` `UserCreateData` Модель пользователя
 * @response `400` `{
  \** @default "VALIDATION_ERROR" *\
    code?: string,
  \** @default "Произошла ошибка валидации" *\
    message?: string,
    errors: ({
    code: string,
    message: string,
    path: string,

})[],

}` Ошибка валидации
 * @response `401` `{
  \** @default "USER_NOT_EXISTS" *\
    code?: string,
  \** @default "Введённые вами логин или пароль неверны" *\
    message?: string,

}` Default Response
 * @response `500` `{
  \** @default "SERVER_ERROR" *\
    code?: string,
  \** @default "На сервере произошла техническая ошибка. Попробуйте позже" *\
    message?: string,

}` Ошибка сервера. Что-то пошло не так
 */
    userCreateCreate: (
      data: {
        login: string;
        password: string;
        firstName: string;
        lastName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserCreateData, UserCreateError>({
        path: `/admin/user/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
