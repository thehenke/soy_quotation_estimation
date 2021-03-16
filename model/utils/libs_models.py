from sklearn.linear_model import LinearRegression
from sklearn.neural_network import MLPRegressor
from sklearn.neighbors import KNeighborsRegressor
from sklearn.ensemble import RandomForestRegressor
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import AdaBoostRegressor
from sklearn.svm import SVR
from sklearn.dummy import DummyRegressor

import numpy as np

def models():

    models = []
    models.append(('LR', LinearRegression())) ## Regressão Linear
    models.append(('NN', MLPRegressor(random_state=1, max_iter=500)))  # Neural Network
    models.append(('KNN', KNeighborsRegressor())) 
    models.append(('RF', RandomForestRegressor(n_estimators = 10))) # Ensemble method - collection of many decision trees
    models.append(('SVR', SVR(gamma='auto'))) # kernel = linear
    models.append(('Dummy', DummyRegressor()))
    models.append(('DTR', DecisionTreeRegressor(random_state=0)))
    models.append(('AdaBR',  AdaBoostRegressor(DecisionTreeRegressor(max_depth=4), n_estimators=300, random_state = np.random.RandomState(1))))
    return models