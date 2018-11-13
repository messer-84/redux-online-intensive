// Core
import { put, apply } from "redux-saga/effects";
import { cloneableGenerator } from "redux-saga/utils";

// Instruments
import { api } from "../../../REST";
import { uiActions } from '../../ui/actions';
import { usersActions } from '../../users/actions';
import { fetchUsers } from "../saga/workers";

const saga = cloneableGenerator(fetchUsers)();
let clone = null;

describe("fetchUsers saga", () => {
    describe("should pass until response received", () => {
        test("should dispatch <<startFetching>> action", () => {
            expect(saga.next().value).toEqual(put(uiActions.startFetching()));
        });

        test("should call a fetch request", () => {
            expect(saga.next().value).toEqual(
                apply(api, api.users.fetch)
            );
            clone = saga.clone();
        });
    });
});
