import { renderHook } from '@testing-library/react';
import { useIsVisible } from '../useIsVisible';

describe('useIsVisible', () => {
  let mockObserve: jest.Mock;
  let mockDisconnect: jest.Mock;

  beforeEach(() => {
    mockObserve = jest.fn();
    mockDisconnect = jest.fn();
    
    window.IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: mockObserve,
      unobserve: jest.fn(),
      disconnect: mockDisconnect,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a boolean visibility state', () => {
    const { result } = renderHook(() => useIsVisible());
    
    const [setNode, isVisible] = result.current;
    
    expect(typeof setNode).toBe('function');
    expect(isVisible).toBe(false); // Initially false because entry is undefined
  });
});
